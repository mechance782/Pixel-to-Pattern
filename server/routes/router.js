import {Router} from 'express';
import {getUsers} from '../controllers/index.js';
import { postPattern } from '../controllers/index.js';

const router = Router();

router.get('/test', getUsers);
router.post('/pattern', postPattern);

export default router;