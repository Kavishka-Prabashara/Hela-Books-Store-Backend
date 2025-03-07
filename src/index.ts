import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import bookRoutes from './routes/books';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Online Bookstore API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});