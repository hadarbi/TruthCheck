import { FC } from 'react';
import { Box, Paper, Typography, Alert } from '@mui/material';
import { AnalysisResult } from '../../../../types/AnalysisResult';

interface Props {
    factualClaims: AnalysisResult['factualClaims'],
    potentialIssues: AnalysisResult['potentialIssues'],
};

const DetailedAnalysis: FC<Props> = ({ factualClaims = [], potentialIssues = [] }) => {
    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
                📊 Detailed Analysis
            </Typography>
            <Box mt={2}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Factual Claims
                </Typography>
                <ul>
                    {factualClaims.map((claim, idx) => (
                        <li key={idx}>{claim}</li>
                    ))}
                </ul>

                <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                    Potential Issues
                </Typography>
                {potentialIssues.length > 0 ? (
                    <ul>
                        {potentialIssues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                        ))}
                    </ul>
                ) : (
                    <Alert severity="success" sx={{ mt: 1 }}>
                        No potential issues found.
                    </Alert>
                )}
            </Box>
        </Paper>
    );
};

export default DetailedAnalysis;
