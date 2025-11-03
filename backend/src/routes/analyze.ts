import express from 'express';
import analyzeText from '../services/openaiService';
import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { input, source } = req.body;
        const result = await analyzeText(input, source);
        await prisma.analysisHistory.create({
            data: {
                text: input,
                result: JSON.stringify(result),
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ error: 'Failed to analyze input text.' });
    }
});

router.get('/history', async (req, res) => {
    console.log('HISTORY');
    try {
        const history = await prisma.analysisHistory.findMany({
            orderBy: { createdAt: 'desc' },
        });

        res.status(200).json(history);
    } catch (error) {
        console.error('Failed to fetch history:', error);
        res.status(500).json({ error: 'Failed to fetch analysis history.' });
    }
});

export default router;