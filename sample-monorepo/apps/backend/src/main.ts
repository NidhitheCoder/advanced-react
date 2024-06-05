import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

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

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
