import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleAuthButton from './components/GoogleAuthButton';
import HistoryDrawer from './components/HistoryDrawer';
import Balloon from './components/Balloon';
import { useAnalysisContext } from '../../../context/AnalysisContext';

interface Props {
}

const Header: React.FC<Props> = ({ }) => {
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const { resetAll, setAnalysisResult, setInputText, setSourceText } = useAnalysisContext();

    const onSelectHistoryItem = (historyItem: any) => {
        setIsHistoryOpen(false);
        resetAll();
        setAnalysisResult(historyItem.analysisResult);
        setInputText(historyItem.inputText);
        setSourceText(historyItem.sourceText);
    }

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
                    <IconButton onClick={() => setIsHistoryOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Balloon />
                </Box>

                <HistoryDrawer
                    historyOpen={isHistoryOpen}
                    onClose={() => setIsHistoryOpen(false)}
                    onSelectItem={onSelectHistoryItem}
                />
            </Box>
        </Box >
    );
};

export default Header;
