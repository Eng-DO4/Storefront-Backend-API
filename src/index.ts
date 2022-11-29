import express, { Application, Request, Response } from 'express';
import bp from 'body-parser';
import routes from './routes';
import config from './config';

const app: Application = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello at server 🌍🌏🌎');
});

app.use('/api', routes);

const port: number = +(config.port as string);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

export default app;
