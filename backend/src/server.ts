import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import analyzeRoute from './routes/analyze';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/analyze', analyzeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
