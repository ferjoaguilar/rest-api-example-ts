import express, {Request, Response} from 'express';
import { users } from '../database/users';

const router = express.Router()

router.get('/all', (req:Request, res:Response) => {
  res.send('Hello from accomodations');
});


export default router