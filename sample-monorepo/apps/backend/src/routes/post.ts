import express from 'express';
import { createPost, getPost, getPosts } from '../controllers/post';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);

export default router;
