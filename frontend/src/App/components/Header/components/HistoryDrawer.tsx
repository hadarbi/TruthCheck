import { useEffect, useState } from 'react';
import { Box, Drawer, Typography, List, ListItem, ListItemText } from '@mui/material';

interface HistoryDrawerProps {
    historyOpen: boolean;
    onClose: () => void;
    onSelectItem: (text: string) => void;
}

const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ historyOpen, onClose, onSelectItem }) => {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        if (historyOpen) fetchHistory();
    }, [historyOpen]);

    const fetchHistory = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch("http://localhost:3001/analyze/history", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            const data = await res.json();
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
                            onClick={() => onSelectItem(item.text)}
                        >
                            <ListItemText
                                primary={item.text.slice(0, 30) + (item.text.length > 30 ? '...' : '')}
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
