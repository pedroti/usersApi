import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import { errors } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import '@shared/infra/typeorm';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use(errors());
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.error(error);
    return response.status(500).json({
      status: 'error',
      message: 'Erro inesperado.',
    });
  },
);
app.listen(3333);
