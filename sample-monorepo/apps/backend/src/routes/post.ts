import express from 'express';
import { createPost, getPost, getPosts } from '../controllers/post';

const router = express.Router();

router.get('/', getPost);
router.get('/:id', getPosts);
router.post('/', createPost);

export default router;
