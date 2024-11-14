import { Router } from 'express';
import { createReservation, listReservations } from '../controllers/reservationController';

const router: Router = Router();

router.post('/', createReservation);
router.get('/', listReservations);

export default router;
