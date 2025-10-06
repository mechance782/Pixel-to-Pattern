import {Router} from 'express';
import {getUsers, getAllPatterns} from '../controllers/index.js';

const router = Router();

router.get('/test', getUsers);
router.get('/get', getAllPatterns);

export default router;