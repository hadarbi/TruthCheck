import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor: '#0D47A1', color: 'white', py: 2, textAlign: 'center' }}>
            <Typography variant="body2">© 2025 TruthCheck. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
