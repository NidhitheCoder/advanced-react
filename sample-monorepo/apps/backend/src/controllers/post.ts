import { NextFunction, Request, Response } from 'express';
import Post from '../models/Post';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../error';

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find({ createdBy: req.user.userId }).sort(
      'createBy'
    );

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
    const post = await Post.create(req.body);

    res.status(StatusCodes.CREATED).json({ post });
  } catch (err) {
    next(err);
  }
};

export { createPost, getPost, getPosts };
