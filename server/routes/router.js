import {Router} from 'express';
import {getAll} from '../controllers/index.js';

const router = Router();

router.get('/get', getAll);

export default router;