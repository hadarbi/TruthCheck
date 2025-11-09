import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CertaintyGauge from './CertaintyGauge';
import { AnalysisResult } from '../../../AnalysisContext';

interface AnalysisSummaryProps {
    summary: AnalysisResult['summary'],
    certainty: AnalysisResult['certainty'],
}
const AnalysisSummary: React.FC<AnalysisSummaryProps> = ({ summary, certainty }) => (
    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
            Analysis Summary
        </Typography>

        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                maxWidth: '100%',
            }}
        >
            <Typography sx={{ color: 'black' }}>{summary}</Typography>

            <Box sx={{ minWidth: 100 }}>
                <CertaintyGauge value={certainty} label="Analysis Certainty" />
            </Box>
        </Box>
    </Paper>
);

export default AnalysisSummary;
