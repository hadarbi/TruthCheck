import { MAX_CHARACTERS } from "../constants";
import { useState, useEffect } from 'react';

export const useTextAnalysis = (initialText = '', onAnalyzed) => {
    const [inputText, setInputText] = useState(initialText);
    const [sourceText, setSourceText] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setInputText(initialText);
    }, [initialText]);

    const isTooLong = initialText.length > MAX_CHARACTERS;


    const handleAnalyze = async (input, source) => {
        if (!input) input = inputText;
        if (!source) source = sourceText;

        if (isTooLong || !input) return;

        setLoading(true);
        setError(null);
        setAnalysisResult(null);
        onAnalyzed(input);
        try {

            const response = await fetch("http://localhost:3001/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    source,
                    input,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                try {
                    setAnalysisResult(data);
                    onAnalyzed?.(data.text);
                }
                catch (err) {
                    setError("Failed to analyze text. Please try again later.");
                }
            } else {
                throw new Error(data.error?.message || "Unknown error");
            }
        } catch (err) {
            setError(err.message || "Failed to analyze text. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setInputText('');
        setSourceText('');
        setAnalysisResult(null);
        setError(null);
    };

    return {
        inputText,
        sourceText,
        analysisResult,
        loading,
        error,
        isTooLong,
        handleAnalyze,
        handleClear,
        setInputText,
        setSourceText,
    };
};