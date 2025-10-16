import {Router} from 'express';
import {getAll, getSpecificPattern, uploadPattern, updatePatternController} from '../controllers/controller.js';

const router = Router();

router.get('/patterns', getAll);
router.get('/patterns/:id', getSpecificPattern);
router.post('/patterns', uploadPattern);
router.patch('/update/:id', updatePatternController);

export default router;