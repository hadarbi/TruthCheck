import React from 'react';
import { TextField, Button, Box, Stack, Alert } from '@mui/material';

interface InputSectionProps {
    inputText: string;
    setInputText: (text: string) => void;
    isTooLong: boolean;
    sourceText: string;
    setSourceText: (text: string) => void;
    loading: boolean;
    handleAnalyze: (input: string, source: string) => Promise<void>;
    handleClear: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
    inputText,
    setInputText,
    isTooLong,
    sourceText,
    setSourceText,
    loading,
    handleAnalyze,
    handleClear,
}) => (
    <Box>
        <TextField
            label="Paste a tweet, post, or headline to analyze"
            multiline
            fullWidth
            rows={6}
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            error={isTooLong}
            helperText={`${inputText.length} / 10000 characters`}
        />
        {isTooLong && (
            <Box mt={1}>
                <Alert severity="error">
                    Text exceeds the 10,000 character limit. Please shorten it to proceed.
                </Alert>
            </Box>
        )}
        <Box mt={3}>
            <TextField
                label="Source (optional)"
                placeholder="e.g., https://twitter.com/example"
                fullWidth
                variant="outlined"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
            />
        </Box>
        <Stack direction="row" spacing={2} mt={3}>
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#0D47A1',
                    '&:hover': { bgcolor: '#08306b' },
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem',
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                }}
                onClick={() => handleAnalyze(inputText, sourceText)}
                disabled={!inputText || isTooLong || loading}
            >
                {loading ? 'Analyzing...' : 'Analyze'}
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem',
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                }}
                disabled={loading}
            >
                Clear
            </Button>
        </Stack>
    </Box>
);

export default InputSection;
