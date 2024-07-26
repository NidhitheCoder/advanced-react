import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import Post from '../models/Post';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../error';

interface User {
  userId: string;
}

interface GetPostsProps extends Request {
  user: User;
}

const getPosts = async (
  req: GetPostsProps,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Need to replace undefined with userId
    const posts = await Post.find({ createdBy: undefined }).sort('createBy');

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const post = await Post.findOne({ id });

    if (!post) {
      throw new BadRequestError(`No user found with id ${id}`);
    }

    res.status(StatusCodes.OK).json(post);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(' ')[1];
    const userID = jwt.decode(token).userId;

    const newPost = { ...req.body, author: userID };
    const post = await Post.create(newPost);

    res.status(StatusCodes.CREATED).json({ post });
  } catch (err) {
    next(err);
  }
};

export { createPost, getPost, getPosts };
