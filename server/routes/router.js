import {Router} from 'express';
import {getUsers} from '../controllers/index.js';

const router = Router();

router.get('/test', getUsers);

export default router;