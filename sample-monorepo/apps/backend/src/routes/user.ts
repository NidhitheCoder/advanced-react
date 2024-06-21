import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('User main route'));
router.get('/:id', (req, res) => res.send('Individual user route'));

export default router;
