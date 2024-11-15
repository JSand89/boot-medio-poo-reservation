import { Router } from 'express';
import { createTable } from '../controllers/tableController';

const router = Router();

router.post('/', createTable);

export default router;
