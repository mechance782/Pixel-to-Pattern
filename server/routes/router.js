import {Router} from 'express';
import {getAll, getSpecificPattern, postPattern} from '../controllers/index.js';

const router = Router();

router.get('/patterns', getAll);
router.get('/patterns/:id', getSpecificPattern);
router.post('/pattern', postPattern);

export default router;