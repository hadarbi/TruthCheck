import { useEffect, useState } from 'react';
import {
    Box,
    IconButton,
    Typography,
    Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onMenuClick, }) => {
    const [showBalloon, setShowBalloon] = useState(false);

    useEffect(() => {
        const seenBalloon = localStorage.getItem('seenHistoryBalloon');
        if (!seenBalloon) {
            setShowBalloon(true);
            localStorage.setItem('seenHistoryBalloon', 'true');
        }
    }, []);

    return (
        <Box sx={{ bgcolor: '#e0e0e0', py: 2, px: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="bold">TruthCheck 🔎</Typography>

            <Box sx={{ position: 'relative' }}>
                <IconButton onClick={onMenuClick}><MenuIcon /></IconButton>

                {showBalloon && (
                    <Paper
                        elevation={4}
                        sx={{
                            position: 'absolute',
                            top: '45px',
                            right: '-15px',
                            bgcolor: '#e3f2fd',
                            color: '#0d47a1',
                            px: 2,
                            py: 1,
                            border: '2px solid #90caf9',
                            borderRadius: '10px',
                            fontSize: 13,
                            zIndex: 999,
                            maxWidth: 200,
                            boxShadow: 3,
                            width: 180,
                            transition: 'opacity 0.3s ease',
                            "&::after": {
                                content: '""',
                                position: 'absolute',
                                top: '-10px',
                                right: '25px',
                                width: 0,
                                height: 0,
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderBottom: '8px solid #e3f2fd',
                            },
                            "&::before": {
                                content: '""',
                                position: 'absolute',
                                top: '-12px',
                                right: '25px',
                                width: 0,
                                height: 0,
                                borderLeft: '9px solid transparent',
                                borderRight: '9px solid transparent',
                                borderBottom: '10px solid #90caf9',
                                zIndex: -1,
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                size="small"
                                onClick={() => setShowBalloon(false)}
                                sx={{ p: 0.5 }}
                            >
                                ❌
                            </IconButton>
                            <Typography variant="body2">
                                Click here to view your analysis history!
                            </Typography>
                        </Box>
                    </Paper>
                )}
            </Box>
        </Box>
    );
};

export default Header;