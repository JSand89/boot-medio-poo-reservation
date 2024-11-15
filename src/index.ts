import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

// Cargar las variables de entorno desde .env
dotenv.config();

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
