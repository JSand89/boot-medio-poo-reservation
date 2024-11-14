import { Request, Response, NextFunction } from 'express';
import { Customer } from '../models/customer';
import { DineInReservation } from '../models/dineInReservation';
import { Table } from '../models/table';

let reservations: DineInReservation[] = [];
let nextId = 1;

export const createReservation = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { name, phoneNumber, dateTime, numberOfGuests, tableNumber } = req.body;

    // Lógica de validación y creación de la reserva
    const customer = new Customer(name, phoneNumber);
    const table = new Table(tableNumber, numberOfGuests);

    if (!table.isAvailable) {
      res.status(400).json({ message: 'Table is not available' });
      return;
    }

    const reservation = new DineInReservation(nextId++, customer, new Date(dateTime), numberOfGuests, table);
    reservations.push(reservation);
    reservation.confirm();

    res.status(201).json({ message: 'Reservation created', reservation });
  } catch (error) {
    next(error);
  }
};

export const listReservations = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
};
