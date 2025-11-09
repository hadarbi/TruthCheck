import { useAnalysisContext } from '../../../../context/AnalysisContext';
import { AnalysisResult } from "../../../../types/AnalysisResult";
import { MAX_CHARACTERS } from '../../../../config';
import { useApiClient } from '../../../../common/apiClient';


export const useTextAnalysis = () => {
    const { analysisResult, setAnalysisResult, isLoading, setIsLoading, error, setError } = useAnalysisContext();
    const { analyze } = useApiClient();

    const handleAnalyze = async (input: string, source: string): Promise<void> => {
        const isTooLong = input.length > MAX_CHARACTERS;

        if (isTooLong || !input) return;

        setIsLoading(true);
        setError(undefined);
        setAnalysisResult(undefined);
        const data: AnalysisResult = await analyze(input, source);
        setAnalysisResult(data);
        setIsLoading(false);
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