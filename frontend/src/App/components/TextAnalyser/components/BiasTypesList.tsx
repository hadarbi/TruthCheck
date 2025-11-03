import React from 'react';
import { Box, Alert, Tooltip, Typography } from '@mui/material';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

interface BiasType {
    type: string;
    explanation: string;
}

interface BiasTypesListProps {
    biasTypes: BiasType[];
}

const BiasTypesList: React.FC<BiasTypesListProps> = ({ biasTypes }) => (
    <Box mb={2}>
        {biasTypes.map((biasObj, idx) => (
            <Alert
                key={idx}
                icon={
                    <Tooltip
                        title={
                            <Typography sx={{ fontSize: 13, maxWidth: 250 }}>
                                {biasObj.explanation}
                            </Typography>
                        }
                        arrow
                        slotProps={{
                            tooltip: {
                                sx: {
                                    bgcolor: '#e3f2fd',
                                    color: '#0d47a1',
                                    borderRadius: 1.5,
                                    border: '1px solid #90caf9',
                                    fontSize: 13,
                                    p: 1,
                                },
                            },
                        }}
                    >
                        <InfoOutlined sx={{ color: '#0d47a1', fontSize: 20, cursor: 'help' }} />
                    </Tooltip>
                }
                sx={{
                    mb: 1,
                    bgcolor: '#e3f2fd',
                    color: '#0d47a1',
                    border: '1px solid #90caf9',
                    fontWeight: 'bold',
                }}
            >
                {biasObj.type}
            </Alert>
        ))}
    </Box>
);

export default BiasTypesList;
