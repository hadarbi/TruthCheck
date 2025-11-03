"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const google_auth_library_1 = require("google-auth-library");
const analyze_1 = __importDefault(require("./routes/analyze"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use(express_1.default.json());
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
app.post('/auth/google-login', async (req, res) => {
    try {
        const token = req.body.credential;
        if (!token) {
            return res.status(400).json({ error: 'Missing token' });
        }
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        res.json({
            name: payload?.name,
            email: payload?.email,
            picture: payload?.picture,
        });
    }
    catch (error) {
        console.error('Google login failed:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
});
app.use('/analyze', analyze_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
