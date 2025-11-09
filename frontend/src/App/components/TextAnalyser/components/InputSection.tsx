import React, { useState } from 'react';
import { TextField, Button, Box, Stack, Alert } from '@mui/material';
import { MAX_CHARACTERS } from "../constants";
import { useAnalysis } from '../../../AnalysisContext';

interface InputSectionProps {
    handleAnalyze: (input: string, source: string) => Promise<void>;
    resetResult: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
    handleAnalyze,
    resetResult,
}) => {
    const { inputText, setInputText, sourceText, setSourceText, isLoading } = useAnalysis();
    const isInputTooLong = inputText.length > MAX_CHARACTERS;

    const handleClear = () => {
        setInputText('');
        setSourceText('');
        resetResult();
    };

    return (
        <Box>
            <TextField
                label="Paste a tweet, post, or headline to analyze"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                error={isInputTooLong}
                helperText={`${inputText.length} / 10000 characters`}
            />
            {isInputTooLong && (
                <Box mt={1}>
                    <Alert severity="error">
                        Text exceeds the 10,000 character limit. Please shorten it to proceed.
                    </Alert>
                </Box>
            )}
            <Box mt={3}>
                <TextField
                    label="Source (optional)"
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
                    disabled={!inputText || isInputTooLong || isLoading}
                >
                    {isLoading ? 'Analyzing...' : 'Analyze'}
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
                    disabled={isLoading}
                >
                    Clear
                </Button>
            </Stack>
        </Box>
    );
}
export default InputSection;
