import { Box, Typography, CircularProgress, Tooltip } from '@mui/material';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

interface CertaintyGaugeProps {
    value: number;
    label: "Analysis Certainty";
}

const CertaintyGauge: React.FC<CertaintyGaugeProps> = ({ value, label }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: '#6a1b9a',
                        fontWeight: 'bold',
                        cursor: 'help',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {label}
                </Typography>
                <Tooltip
                    arrow
                    placement='top'
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
                    title={
                        <Typography sx={{ fontSize: 14, maxWidth: 260 }}>
                            This score reflects the AI's self-rated confidence in the analysis. Not a ground truth.
                        </Typography>
                    }
                >
                    <InfoOutlined sx={{ fontSize: 18, ml: 0.5, cursor: 'help', color: '#6a1b9a' }} />
                </Tooltip>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CircularProgress
                    variant="determinate"
                    value={value || 0}
                    size={80}
                    thickness={5}
                    sx={{
                        color:
                            value >= 75 ? '#4caf50' : value >= 50 ? '#ffc107' : '#f44336',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold" color="textPrimary">
                        {`${Math.round(value)}%`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default CertaintyGauge;
