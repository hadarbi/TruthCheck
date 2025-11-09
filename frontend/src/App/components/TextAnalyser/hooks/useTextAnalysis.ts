import { MAX_CHARACTERS } from "../constants";
import { useAnalysis, AnalysisResult } from '../../../AnalysisContext';


export const useTextAnalysis = () => {
    const { analysisResult, setAnalysisResult, isLoading, setIsLoading, error, setError } = useAnalysis();

    const handleAnalyze = async (input: string, source: string): Promise<void> => {
        const isTooLong = input.length > MAX_CHARACTERS;

        if (isTooLong || !input) return;

        setIsLoading(true);
        setError(undefined);
        setAnalysisResult(undefined);
        const token = localStorage.getItem('token');
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
            setIsLoading(false);
        }
    };

    const resetResult = () => {
        setAnalysisResult(undefined);
        setError(undefined);
    }

    return {
        analysisResult,
        error,
        handleAnalyze,
        isLoading,
        resetResult,
    }
}