import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

import user from './routes/user';
import auth from './routes/auth';
import errorHandler from './middlewares/error-handler';
import notFound from './middlewares/not-found';
import Auth from './middlewares/authentication';

const baseURL = process.env.VITE_API_URL ?? 'http://localhost:3000';
const port = process.env.VITE_PORT ?? '3000';

const app = express();
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

app.use('/', (req, res) => res.send('Ping route'));
app.get('/auth', auth);
app.get('/users', Auth, user);

// Error handler middlewares
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(baseURL);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
