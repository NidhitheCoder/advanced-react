import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

import postRoute from './routes/post';
import authRoute from './routes/auth';
import errorHandler from './middlewares/error-handler';
import notFound from './middlewares/not-found';
import authMiddleware from './middlewares/authentication';
import connectDB from './connect/db';

const baseURL = process.env.VITE_API_BACKEND_URI ?? 'http://localhost:3000';
const port = process.env.VITE_PORT ?? '3000';

const app = express();
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.set('base', baseURL);

app.get('/api/v1/ping', (req: Request, res: Response) =>
  res.send('Ping route')
);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', authMiddleware, postRoute);

// Error handler middlewares
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  await connectDB(process.env.VITE_MONGO_URI);

  try {
    app.listen(port, () => {
      console.log(baseURL);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
