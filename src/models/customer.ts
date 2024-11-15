import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  phoneNumber: string;
  email?: string;
}

const customerSchema: Schema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String }
});

export default mongoose.model<ICustomer>('Customer', customerSchema);
