import express from 'express';
import analyzeText from '../services/openaiService/openaiService';
import { authenticate } from '../middlewares/authenticate';
import { getHistoryItem, insertHistoryItem } from '../services/dbManager';

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
    try {
        const userEmail = req.user.email
        const { input, source } = req.body;
        const analysisResult = await analyzeText(input, source);
        await insertHistoryItem(input, source, userEmail, analysisResult);
        res.status(200).json(analysisResult);
    } catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ error: 'Failed to analyze input text.' });
    }
});

router.get('/history', authenticate, async (req, res) => {
    try {
        const userEmail = req.user.email;
        const history = getHistoryItem(userEmail);

        res.status(200).json(history);
    } catch (error) {
        console.error('Failed to fetch history:', error);
        res.status(500).json({ error: 'Failed to fetch analysis history.' });
    }
});

export default router;