import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer';
import Table from '../models/table';
import Reservation from '../models/reservation';

export const createReservation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, phoneNumber, dateTime, numberOfGuests, tableNumber } = req.body;

    // Verificar si la mesa existe y está disponible
    const table = await Table.findOne({ tableNumber, isAvailable: true });
    if (!table) {
      res.status(400).json({ message: `Table ${tableNumber} is not available or does not exist` });
      return;
    }

    // Crear o buscar un cliente
    let customer = await Customer.findOne({ phoneNumber });
    if (!customer) {
      customer = new Customer({ name, phoneNumber });
      await customer.save();
    }

    // Crear la reserva
    const reservation = new Reservation({
      customer: customer._id,
      table: table._id,
      dateTime,
      numberOfGuests
    });
    await reservation.save();

    // Marcar la mesa como ocupada
    table.isAvailable = false;
    await table.save();

    res.status(201).json({ message: 'Reservation created successfully', reservation });
  } catch (error) {
    next(error);
  }
};
export const listReservations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Obtener todas las reservas y popular los datos de cliente y mesa
    const reservations = await Reservation.find()
      .populate('customer', 'name phoneNumber') // Solo los campos necesarios de Customer
      .populate('table', 'tableNumber capacity isAvailable'); // Solo los campos necesarios de Table

    if (!reservations.length) {
      res.status(404).json({ message: 'No reservations found' });
      return;
    }

    res.status(200).json(reservations);
  } catch (error) {
    next(error); // Pasar errores al middleware de manejo de errores
  }
};