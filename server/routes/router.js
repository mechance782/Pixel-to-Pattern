import {Router} from 'express';
import {getAll, getSpecificPattern} from '../controllers/index.js';

const router = Router();

router.get('/patterns', getAll);
router.get('/patterns/:id', getSpecificPattern);

export default router;