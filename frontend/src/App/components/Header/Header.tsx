import { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleAuthButton from './components/GoogleAuthButton';
import HistoryDrawer from './components/HistoryDrawer';
import Balloon from './components/Balloon';

const Header: React.FC = () => {
    const [historyOpen, setHistoryOpen] = useState(false);

    return (
        <Box
            sx={{
                bgcolor: '#e0e0e0',
                py: 2,
                px: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                TruthCheck 🔎
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GoogleAuthButton />

                <Box sx={{ position: 'relative' }}>
                    <IconButton onClick={() => setHistoryOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Balloon />
                </Box>

                <HistoryDrawer
                    historyOpen={historyOpen}
                    onClose={() => setHistoryOpen(false)}
                    onSelectItem={(text) => console.log("Select analysis:", text)}
                />
            </Box>
        </Box >
    );
};

export default Header;
