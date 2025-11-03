import { MAX_CHARACTERS } from "../constants";
import { useState, useEffect } from 'react';

interface AnalysisResult {
    summary: string,
    flags: string[],
    factualClaims: string[],
    potentialIssues: string[],
    biasTypes: [
        {
            "type": string,
            "explanation": string
        }
    ],
    tokensUsed: number,
    certainty: number
}

export const useTextAnalysis = (initialText: string) => {
    const [inputText, setInputText] = useState(initialText);
    const [sourceText, setSourceText] = useState('');
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        setInputText(initialText);
    }, [initialText]);

    const isTooLong = inputText.length > MAX_CHARACTERS;

    const handleAnalyze = async (input: string, source: string): Promise<void> => {
        if (isTooLong || !input) return;

        setLoading(true);
        setError(undefined);
        setAnalysisResult(undefined);
        const token = localStorage.getItem('token');
        console.log(token);
        try {

            const response = await fetch("http://localhost:3001/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ input, source }),
            });

            const data: AnalysisResult = await response.json();

            if (response.ok) {
                setAnalysisResult(data);
            } else {
                throw new Error("Unknown error");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Failed to analyze text. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        setInputText('');
        setSourceText('');
        setAnalysisResult(undefined);
        setError(undefined);
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