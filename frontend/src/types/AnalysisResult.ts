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
    modelUsed: string;
}
