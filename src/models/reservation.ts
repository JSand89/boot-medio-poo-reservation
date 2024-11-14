import { Customer } from './customer';
import { Table } from './table';

export abstract class Reservation {
  constructor(
    public reservationId: number,
    public customer: Customer,
    public dateTime: Date,
    public numberOfGuests: number
  ) {}

  abstract confirm(): void;
  abstract cancel(): void;

  getDetails(): string {
    return `Reservation ID: ${this.reservationId}, Customer: ${this.customer.name}, Date: ${this.dateTime.toISOString()}`;
  }
}
