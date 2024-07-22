import { NextFunction, Request, Response } from 'express';

const getPosts = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: 'posts list', users: [], total: 0 });
  } catch (err) {
    next(err);
  }
};

const getPost = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: 'Individual post list', user: {} });
  } catch (err) {
    next(err);
  }
};

const createPost = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ msg: 'posts creation' });
  } catch (err) {
    next(err);
  }
};

export { createPost, getPost, getPosts };
