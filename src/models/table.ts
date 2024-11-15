import mongoose, { Schema, Document } from 'mongoose';

export interface ITable extends Document {
  tableNumber: number;
  capacity: number;
  isAvailable: boolean;
}

const tableSchema: Schema = new Schema({
  tableNumber: { type: Number, required: true },
  capacity: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model<ITable>('Table', tableSchema);
