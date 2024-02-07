import express, {Request, Response} from 'express';
import routerApi from './routes';

const app = express();

routerApi(app)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});