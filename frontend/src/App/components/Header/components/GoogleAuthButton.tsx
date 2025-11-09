import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Menu, MenuItem, Typography, Divider } from "@mui/material";
import { useAuthContext } from "../../../../context/AuthContext";
import { GOOGLE_CLIENT_ID } from "../../../../config";
import { useApiClient } from "../../../../common/apiClient";

declare global {
    interface Window {
        google?: any;
    }
}

interface GoogleAuthButtonProps {
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const { user, setUser, setToken } = useAuthContext();
    const { googleLogin } = useApiClient();

    useEffect(() => {
        if (!window.google || user) return;

        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: onGoogleLoginComplete,
        });

        const buttonDiv = document.getElementById("googleSignInDiv");
        if (buttonDiv && buttonDiv.childElementCount === 0) {
            window.google.accounts.id.renderButton(buttonDiv, {
                theme: "outline",
                size: "medium",
            });
        }
    }, [user]);

    const onGoogleLoginComplete = async (response: any) => {
        const userResponse = await googleLogin(response.credential);
        setUser(userResponse);
        setToken(response.credential);
    };

    const handleLogout = () => {
        setUser(undefined);
        setToken("");
        setIsMenuOpen(false);
    };

    const handleAvatarClick = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

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
                        ref={anchorRef}
                    />
                    <Menu
                        anchorEl={anchorRef.current}
                        open={isMenuOpen}
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
