import { Request, Response, NextFunction } from 'express';
import Table from '../models/table';

export const createTable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { tableNumber, capacity } = req.body;

    // Verificar si la mesa ya existe
    const existingTable = await Table.findOne({ tableNumber });
    if (existingTable) {
      res.status(400).json({ message: `Table ${tableNumber} already exists` });
      return;
    }

    // Crear una nueva mesa
    const table = new Table({ tableNumber, capacity });
    await table.save();

    res.status(201).json({ message: 'Table created successfully', table });
  } catch (error) {
    next(error);
  }
};
