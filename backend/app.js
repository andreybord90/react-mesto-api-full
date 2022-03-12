import express from 'express';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import * as dotenv from 'dotenv';
import router from './src/routes/users.js';
import routerCards from './src/routes/cards.js';
import { createUser, login } from './src/controllers/users.js';
import { errorHandler } from './src/middlewares/errors-handler.js';
import { auth } from './src/middlewares/auth.js';
import {
  validateCreateUser,
  validateLogin,
} from './src/middlewares/validatons.js';
import { NotFoundError } from './src/errors/index.js';
import { requestLogger, errorLogger } from './src/middlewares/logger.js';
import { corsOptions } from './src/middlewares/cors.js';

dotenv.config();

const { PORT = 3000 } = process.env;
const { connect } = mongoose;
const app = express();

connect('mongodb://localhost:27017/mestodb');

app.use(corsOptions);
app.use(express.json());
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', validateCreateUser, createUser);
app.post('/signin', validateLogin, login);

app.use(auth);

app.use('/', router);
app.use('/', routerCards);

app.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
