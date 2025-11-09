import { PrismaClient } from '../../generated/prisma';
import { AnalysisResult } from './openaiService/openaiService';

const prisma = new PrismaClient();

export const insertHistoryItem = (input: string, source: string, userEmail: string, analysisResult: AnalysisResult) => {
    return prisma.analysisHistory.create({
        data: {
            inputText: input,
            analysisResult: analysisResult,
            sourceText: source,
            userEmail,
        },
    });
}

export const getHistoryItem = (userEmail: string) => {
    return prisma.analysisHistory.findMany({
        where: { userEmail },
        orderBy: { createdAt: 'desc' },
    });
}