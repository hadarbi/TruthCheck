import { Box, Container, Paper, Typography } from '@mui/material';

const aboutItems = [
    {
        title: 'Analyze 🔍',
        text: 'Spot misleading content in social posts using smart AI.',
    },
    {
        title: 'AI-Powered 🤖',
        text: 'We use OpenAI API, As a fact-checker to evaluate truth.',
    },
    {
        title: 'Think Smart 💡',
        text: 'Promoting critical thinking and ethical tech use.',
    },
];

const AboutUs: React.FC = () => {
    return (
        <Box sx={{ bgcolor: '#e0e0e0', py: 3, mt: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                    About Us
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        mt: 3,
                        gap: 6,
                    }}
                >
                    {aboutItems.map((item, idx) => (
                        <Paper
                            key={idx}
                            elevation={3}
                            sx={{
                                width: 200,
                                height: 150,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {item.title}
                            </Typography>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    px: 1,
                                }}
                            >
                                <Typography variant="body2">{item.text}</Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs;
