import { useEffect, useState } from 'react';
import { Box, Drawer, Typography, List, ListItem, ListItemText } from '@mui/material';
import { HistoryItem } from '../../../../types/HistoryItem';
import { useAuthContext } from '../../../../context/AuthContext';
import { API_URL } from '../../../../config';
import { useApiClient } from '../../../../common/apiClient';

interface HistoryDrawerProps {
    historyOpen: boolean;
    onClose: () => void;
    onSelectItem: (historyItem: HistoryItem) => void;
}

const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ historyOpen, onClose, onSelectItem }) => {
    const { fetchHistory: fetchHistoryApi } = useApiClient();
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        if (historyOpen) fetchHistory();
    }, [historyOpen]);

    const fetchHistory = async () => {
        try {
            const data = await fetchHistoryApi();
            setHistory(data);

        } catch (err) {
            console.error("Failed to fetch history:", err);
        }
    };

    return (
        <Drawer anchor="right" open={historyOpen} onClose={onClose}>
            <Box sx={{ width: 300, p: 2, backgroundColor: '#f9f9f9', height: '100%' }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                    sx={{ color: '#1976d2' }}
                >
                    History
                </Typography>

                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{
                        color: '#333',
                        fontSize: '16px',
                        mb: 2,
                        fontWeight: 'bold',
                    }}
                >
                    Click on an item to reload its analysis
                </Typography>

                <List>
                    {Array.isArray(history) && history.map((item) => (
                        <ListItem
                            sx={{ cursor: 'pointer' }}
                            key={item.id}
                            component="button"
                            onClick={() => onSelectItem(item)}
                        >
                            <ListItemText
                                primary={item.inputText.slice(0, 30) + (item.inputText.length > 30 ? '...' : '')}
                                secondary={new Date(item.createdAt).toLocaleString()}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default HistoryDrawer;
