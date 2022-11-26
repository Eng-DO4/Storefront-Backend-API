import express, { Application, Request, Response } from 'express';
import bp from 'body-parser'
import routes from './routes';

const app: Application = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello at server 🌍🌏🌎');
});

app.use('/api', routes);

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});

export default app;
