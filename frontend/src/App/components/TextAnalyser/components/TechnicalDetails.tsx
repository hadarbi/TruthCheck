import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { MODEL } from '../constants';

interface AnalysisResult {
    tokensUsed?: number;
    analysisTime?: string | number;
}

interface TechnicalDetailsProps {
    analysisResult: AnalysisResult;
}

interface GridItem {
    label: string;
    value: string | number;
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ analysisResult }) => {
    const items: GridItem[] = [
        { label: 'Model Used', value: MODEL },
        { label: 'Tokens Used', value: analysisResult.tokensUsed ?? 'N/A' },
        {
            label: 'Analysis Time',
            value: analysisResult.analysisTime
                ? new Date(analysisResult.analysisTime).toLocaleString('en-GB', {
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

            <Grid container spacing={2} sx={{ mt: 1 }} component={React.Fragment as any}>
                {items.map((item: GridItem, idx: number) => (
                    <Grid item xs={12} sm={4} key={idx} component={React.Fragment as any}>
                        <Paper
                            elevation={2}
                            sx={{
                                p: 2,
                                height: 50,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="subtitle2" color="textSecondary">
                                {item.label}
                            </Typography>
                            <Typography fontWeight="bold">{item.value}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default TechnicalDetails;
