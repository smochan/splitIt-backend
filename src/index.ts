// require('dotenv').config();
import express from 'express';
import database from './database';
import cookieParser from 'cookie-parser';
import router from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const start = async () => {
  await database.connect();

  app.use('/', router);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  });

  app.listen(3000, function () {
    console.log('server started on port 3000');
  });
};

start();
