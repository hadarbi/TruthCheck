import React from 'react';
import { Box, Alert } from '@mui/material';

interface FlagsListProps {
    flags: string[];
}

const FlagsList: React.FC<FlagsListProps> = ({ flags }) => (
    <Box mb={2}>
        {flags.length > 0 ? (
            flags.map((flag, idx) => (
                <Alert key={idx} severity="warning" sx={{ mb: 1 }}>
                    {flag}
                </Alert>
            ))
        ) : (
            <Alert severity="success">No issues detected.</Alert>
        )}
    </Box>
);

export default FlagsList;
