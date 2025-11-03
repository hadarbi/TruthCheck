import React, { useEffect, useState } from "react";
import { GOOGLE_CLIENT_ID } from "../../TextAnalyser/constants";
import { Avatar, Box, Menu, MenuItem, Typography, Divider } from "@mui/material";

declare global {
    interface Window {
        google?: any;
    }
}

interface GoogleAuthButtonProps {
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ }) => {
    const [user, setUser] = useState<any>(() => {
        const stored = localStorage.getItem("truthcheck_user");
        return stored ? JSON.parse(stored) : null;
    });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        if (!window.google || user) return;

        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
        });

        const buttonDiv = document.getElementById("googleSignInDiv");
        if (buttonDiv && buttonDiv.childElementCount === 0) {
            window.google.accounts.id.renderButton(buttonDiv, {
                theme: "outline",
                size: "medium",
            });
        }
    }, [user]);

    const handleCredentialResponse = async (response: any) => {
        const res = await fetch("http://localhost:3001/auth/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential: response.credential }),
        });
        const userResponse = await res.json();
        localStorage.setItem("truthcheck_user", JSON.stringify(userResponse));
        localStorage.setItem("token", response.credential);
        setUser(userResponse);
    };

    const handleLogout = () => {
        localStorage.removeItem("truthcheck_user");
        localStorage.removeItem("token");
        setUser(null);
        setAnchorEl(null);
    };

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => setAnchorEl(null);

    return (
        <Box>
            {!user ? (
                <div id="googleSignInDiv"></div>
            ) : (
                <>
                    <Avatar
                        src={user.picture}
                        alt={user.name}
                        onClick={handleAvatarClick}
                        sx={{ cursor: "pointer" }}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                    >
                        <Box sx={{ px: 2, py: 1.5 }}>
                            <Typography variant="subtitle2">{user.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.email || "Guest"}
                            </Typography>
                        </Box>
                        <Divider />
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            )}
        </Box>
    );
};

export default GoogleAuthButton;
