import { NextFunction, Request, Response } from 'express';

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: 'Users list', users: [], total: 0 });
  } catch (err) {
    next(err);
  }
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: ' single user list', user: {} });
  } catch (err) {
    next(err);
  }
};

export { getUser, getUsers };
