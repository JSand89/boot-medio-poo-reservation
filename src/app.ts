import express, { Application } from 'express';
import reservationRoutes from './routes/reservationRoutes';
import tableRoutes from './routes/tableRoutes';

const app: Application = express();
app.use(express.json());

// Rutas
app.use('/api/reservations', reservationRoutes);
app.use('/api/tables', tableRoutes);

export default app;
