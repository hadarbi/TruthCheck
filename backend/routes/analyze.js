const express = require('express');
const router = express.Router();
const analyzeText = require('../services/openaiService');

router.post('/', async (req, res) => {
    try {
        const { input, source } = req.body;
        const result = await analyzeText(input, source);
        res.status(200).json(result);
    } catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ error: 'Failed to analyze input text.' });
    }
});

module.exports = router;
