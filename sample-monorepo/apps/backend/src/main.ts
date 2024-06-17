import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

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

app.get('/', (req, res) => {
  res.send({ message: 'Ping API is success' });
});

app.listen(port, () => {
  console.log(baseURL);
});
