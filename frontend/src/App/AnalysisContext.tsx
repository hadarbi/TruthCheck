import React, { createContext, useContext, useState, ReactNode } from "react";

// -----------------
// Interface for your Analysis result
// -----------------
export interface AnalysisResult {
    summary: string;
    flags: string[];
    factualClaims: string[];
    potentialIssues: string[];
    biasTypes: {
        type: string;
        explanation: string;
    }[];
    tokensUsed: number;
    certainty: number;
    analysisTime: string;
}

// -----------------
// Define context type
// -----------------
interface AnalysisContextType {
    analysisResult?: AnalysisResult;
    setAnalysisResult: (result: AnalysisResult | undefined) => void;

    isLoading: boolean;
    setIsLoading: (val: boolean) => void;

    error?: string;
    setError: (val: string | undefined) => void;

    inputText: string;
    setInputText: (val: string) => void;

    sourceText: string;
    setSourceText: (val: string) => void;

    resetAll: () => void;
}

// -----------------
// Create the context
// -----------------
const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

// -----------------
// Provider component
// -----------------
export const AnalysisProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [inputText, setInputText] = useState("");
    const [sourceText, setSourceText] = useState("");

    // Helper to reset everything
    const resetAll = () => {
        setAnalysisResult(undefined);
        setIsLoading(false);
        setError(undefined);
        setInputText("");
        setSourceText("");
    };

    return (
        <AnalysisContext.Provider
            value={{
                analysisResult,
                setAnalysisResult,
                isLoading,
                setIsLoading,
                error,
                setError,
                inputText,
                setInputText,
                sourceText,
                setSourceText,
                resetAll,
            }}
        >
            {children}
        </AnalysisContext.Provider>
    );
};

// -----------------
// Custom hook for using the context
// -----------------
export const useAnalysis = (): AnalysisContextType => {
    const context = useContext(AnalysisContext);
    if (!context) {
        throw new Error("useAnalysis must be used within an AnalysisProvider");
    }
    return context;
};
