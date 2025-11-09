import express from 'express';
import cors from 'cors';

import analyzeRoute from './routes/analyze';
import authRouter from './routes/auth';
import { FRONTEND_APP_URL, PORT } from './config';

const app = express();

app.use(cors({ origin: FRONTEND_APP_URL, credentials: true }));
app.use(express.json());


app.use('/auth', authRouter);
app.use('/analyze', analyzeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
