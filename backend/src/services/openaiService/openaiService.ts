import { InputJsonValue } from '@prisma/client/runtime/library';
import { OPEN_AI_KEY, LLM_MODEL } from '../../config';
import { ANALYSE_PROMPT } from './constants';

export type AnalysisResult = InputJsonValue & {
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
    certainty: number,
    modelUsed: string;
}

interface Message {
    role: 'system' | 'user';
    content: string;
}

export default async function analyzeText(
    inputText: string,
    sourceText?: string,
): Promise<AnalysisResult> {

    const messages: Message[] = [
        {
            role: "system",
            content: ANALYSE_PROMPT,
        },
        ...(sourceText ? [{
            role: "user" as 'user',
            content: `The following context was provided to help interpret the main text:\n${sourceText}`,
        }] : []),
        {
            role: "user",
            content: inputText,
        }
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPEN_AI_KEY}`,
        },
        body: JSON.stringify({
            model: LLM_MODEL,
            messages,
            temperature: 0.7,
        }),
    });

    const data = await response.json();
    const content = data.choices[0].message.content;
    const result = JSON.parse(content);
    result.analysisTime = new Date().toISOString();
    result.modelUsed = LLM_MODEL;

    return result;
}
