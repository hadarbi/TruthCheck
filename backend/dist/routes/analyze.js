"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openaiService_1 = __importDefault(require("../services/openaiService"));
const prisma_1 = require("../../generated/prisma");
const authenticate_1 = require("../middlewares/authenticate");
const prisma = new prisma_1.PrismaClient();
const router = express_1.default.Router();
router.post('/', authenticate_1.authenticate, async (req, res) => {
    try {
        const userEmail = req.user.email;
        const { input, source } = req.body;
        const result = await (0, openaiService_1.default)(input, source);
        await prisma.analysisHistory.create({
            data: {
                text: input,
                result: JSON.stringify(result),
                userEmail,
            },
        });
        res.status(200).json(result);
    }
    catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ error: 'Failed to analyze input text.' });
    }
});
router.get('/history', async (req, res) => {
    try {
        const userEmail = req.user.email;
        const history = await prisma.analysisHistory.findMany({
            where: { userEmail },
            orderBy: { createdAt: 'desc' },
        });
        res.status(200).json(history);
    }
    catch (error) {
        console.error('Failed to fetch history:', error);
        res.status(500).json({ error: 'Failed to fetch analysis history.' });
    }
});
exports.default = router;
