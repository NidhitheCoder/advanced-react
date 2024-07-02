import { NextFunction, Request, Response } from 'express';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({ msg: 'user registered' });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    next(err);
  }
};

export { login, register };
