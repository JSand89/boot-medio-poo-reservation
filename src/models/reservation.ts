import mongoose, { Schema, Document } from 'mongoose';
import { ICustomer } from './customer';
import { ITable } from './table';

export interface IReservation extends Document {
  customer: ICustomer['_id'];
  table: ITable['_id'];
  dateTime: Date;
  numberOfGuests: number;
}

const reservationSchema: Schema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  table: { type: Schema.Types.ObjectId, ref: 'Table', required: true },
  dateTime: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true }
});

export default mongoose.model<IReservation>('Reservation', reservationSchema);

