import express, { Application, Request, Response } from 'express';
import port from './config';

const app: Application = express();

const serverPort = +(port as unknown as string) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello at server 🌍🌏🌎');
});

app.listen(serverPort, () => {
  console.log(`server is running at http://localhost:${serverPort}`);
});

export default app;
