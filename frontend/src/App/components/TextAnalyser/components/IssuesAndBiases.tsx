import { FC } from 'react';
import { Box, Paper, Typography, Tooltip } from '@mui/material';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FlagsList from './FlagsList';
import BiasTypesList from './BiasTypesList';
import { AnalysisResult } from '../../../../types/AnalysisResult';

interface Props {
    flags: AnalysisResult['flags'],
    biasTypes: AnalysisResult['biasTypes'],
};

const IssuesAndBiases: FC<Props> = ({ flags = [], biasTypes = [] }) => {
    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3, mt: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    ⚠️ Issues Detected
                </Typography>

                <Tooltip
                    title={
                        <Typography sx={{ fontSize: 14, maxWidth: 260 }}>
                            Cognitive biases are systematic patterns of deviation from rational judgment, which may influence how information is framed or interpreted.
                        </Typography>
                    }
                    arrow
                    placement="top"
                    slotProps={{
                        tooltip: {
                            sx: {
                                bgcolor: '#f3e5f5',
                                color: '#4a148c',
                                fontSize: 14,
                                boxShadow: 3,
                                p: 1.5,
                                borderRadius: 2,
                                border: '1px solid #ccc',
                            },
                        },
                        arrow: {
                            sx: {
                                color: 'white',
                            },
                        },
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#6a1b9a',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'help',
                            fontWeight: 'bold',
                        }}
                    >
                        🧠 Cognitive Biases
                        <InfoOutlined sx={{ fontSize: 18, ml: 0.5 }} />
                    </Typography>
                </Tooltip>
            </Box>

            <FlagsList flags={flags} />

            {biasTypes.length > 0 && (
                <>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>
                        Detected Bias Types
                    </Typography>
                    <BiasTypesList biasTypes={biasTypes} />
                </>
            )}
        </Paper>
    );
};

export default IssuesAndBiases;
