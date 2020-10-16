import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token JWT não está presente.', 401);
  }

  const [, token] = authHeader.split(' ');
  const decoded = verify(token, '9cea1ae8a42590e8fdb328669f534dfb');
  const { sub } = decoded as TokenPayload;
  request.user = { id: sub };
  return next();
}
