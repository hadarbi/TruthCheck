import dotenv from 'dotenv';
dotenv.config();

// Server Setup
export const PORT = process.env.PORT;
export const FRONTEND_APP_URL = process.env.FRONTEND_APP_URL;

// LLM Related
export const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
export const LLM_MODEL = process.env.LLM_MODEL;

// Google Auth Related
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
