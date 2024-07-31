import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Post from '../models/Post';
import { BadRequestError } from '../error';
import { User } from '../types';

interface RequestWithUser extends Request {
  user: User;
}

const getPosts = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await Post.find({ createdBy: req.user.userId }).sort(
      'createBy'
    );

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body;
    const post = await Post.findOne({ id, createdBy: req.user.userId });

    if (!post) {
      throw new BadRequestError(`No user found with id ${id}`);
    }

    res.status(StatusCodes.OK).json(post);
  } catch (err) {
    next(err);
  }
};

const createPost = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPost = { ...req.body, createdBy: req.user.userId };
    const post = await Post.create(newPost);

    res.status(StatusCodes.CREATED).json({ post });
  } catch (err) {
    next(err);
  }
};

export { createPost, getPost, getPosts };
