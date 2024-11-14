import express, { Application } from 'express';
import reservationRoutes from './routes/reservationRoutes';

const app: Application = express();
app.use(express.json());

// Rutas
app.use('/api/reservations', reservationRoutes);

export default app;
