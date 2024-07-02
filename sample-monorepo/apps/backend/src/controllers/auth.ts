import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../models/User';
import { UnauthenticatedError } from '../error';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.create(req.body);
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    const isCorrectPassword = await user.comparePassword(user.password);

    if (!user && !isCorrectPassword) {
      throw new UnauthenticatedError('Invalid credentials');
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
  } catch (err) {
    next(err);
  }
};

export { login, register };
