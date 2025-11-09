import { Router, Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID } from '../config';

const router = Router();

router.post('/google-login', async (req: Request, res: Response) => {
    try {
        const token = req.body.credential;
        if (!token) {
            return res.status(400).json({ error: 'Missing token' });
        }
        const client = new OAuth2Client(GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            res.status(500).json({ error: 'Unable to parse user details' });
        }
        res.json(payload);
    } catch (error) {
        console.error('Google login failed:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
});

export default router;
