import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID } from '../config';

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            return res.status(401).json({ error: "Invalid Google token" });
        }

        (req as any).user = {
            email: payload.email,
            name: payload.name,
            picture: payload.picture,
        };

        next();
    } catch (error) {
        console.error("Auth verification failed:", error);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};
