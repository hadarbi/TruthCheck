import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            return res.status(401).json({ error: "Invalid Google token" });
        }

        // Attach user info to request object
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
