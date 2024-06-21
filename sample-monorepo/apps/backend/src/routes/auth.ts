import express from 'express';

const router = express.Router();
router.post('/login', (req, res) => res.send('Login route'));
router.post('/signup', (req, res) => res.send('Signup route'));

export default router;
