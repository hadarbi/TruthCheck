import { AnalysisResult } from "./AnalysisResult";

export interface HistoryItem {
    id: number;
    inputText: string;
    sourceText: string;
    userEmail: string;
    analysisResult: AnalysisResult;
    createdAt: string;
}