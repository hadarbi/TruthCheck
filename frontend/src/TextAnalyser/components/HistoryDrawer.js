import React from 'react';
import {
    Box,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

const HistoryDrawer = ({ open, onClose, history, onSelectItem }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
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
                    {history.map((item, idx) => (
                        <ListItem
                            sx={{ cursor: 'pointer' }}
                            key={idx}
                            button
                            onClick={() => onSelectItem(item.fullText)}
                        >
                            <ListItemText primary={item.subject} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default HistoryDrawer;
