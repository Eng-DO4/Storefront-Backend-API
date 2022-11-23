import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';

// extraction port number from .env file
dotenv.config();
const PORT = process.env.PORT || 3000;

// create an instance server
const app: Application = express();

// add routing for / path "main endpoint"
app.get('/', (req: Request, res: Response) => {
  res.send('Hello at server 🌍🌏🌎');
});

// start express server
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

export default app;
