import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { MODEL } from '../constants';
import { AnalysisResult } from '../../../AnalysisContext';

interface TechnicalDetailsProps {
    tokensUsed: AnalysisResult['tokensUsed'];
    analysisTime: AnalysisResult['analysisTime'];
}

interface GridItem {
    label: string;
    value: string | number;
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ tokensUsed, analysisTime }) => {
    const items: GridItem[] = [
        { label: 'Model Used', value: MODEL },
        { label: 'Tokens Used', value: tokensUsed ?? 'N/A' },
        {
            label: 'Analysis Time',
            value: analysisTime
                ? new Date(analysisTime).toLocaleString('en-GB', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                    timeZone: 'Asia/Jerusalem',
                })
                : 'N/A',
        },
    ];

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                ⚙️ Technical Details
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 3, gap: 6, }}>
                {items.map((item: GridItem, idx: number) => (
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            flex: 1,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.label}
                        </Typography>
                        <Typography fontWeight="bold">{item.value}</Typography>
                    </Paper>
                ))}
            </Box>
        </Paper>
    );
};

export default TechnicalDetails;
