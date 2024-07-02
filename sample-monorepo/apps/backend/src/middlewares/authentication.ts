import { NextFunction, Request, Response } from 'express';
import jwtToken from 'jsonwebtoken';

import { UnauthenticatedError } from '../error';
import { User } from '../types';

interface AuthRequest extends Request {
  user: User;
}

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Need authentication');
  }

  const token = authHeader.split(' ')[0];

  try {
    const payload = jwtToken.verify(
      token,
      process.env.VITE_JWT_SECRET || 'jwtSecret'
    );

    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (err) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

export default auth;
