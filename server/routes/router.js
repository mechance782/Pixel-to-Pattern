import {Router} from 'express';
import {getAll, getSpecificPattern, uploadPattern} from '../controllers/index.js';

const router = Router();

router.get('/patterns', getAll);
router.get('/patterns/:id', getSpecificPattern);
router.post('/patterns', uploadPattern);

export default router;