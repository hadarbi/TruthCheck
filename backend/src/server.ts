import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';

import analyzeRoute from './routes/analyze';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post('/auth/google-login', async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error('Google login failed:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.use('/analyze', analyzeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
