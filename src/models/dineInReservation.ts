import { Reservation } from './reservation';
import { Customer } from './customer';
import { Table } from './table';

export class DineInReservation extends Reservation {
  constructor(
    reservationId: number,
    customer: Customer,
    dateTime: Date,
    numberOfGuests: number,
    public table: Table
  ) {
    super(reservationId, customer, dateTime, numberOfGuests);
  }

  confirm(): void {
    if (this.table.isAvailable) {
      this.table.markOccupied();
      console.log(`Dine-in reservation confirmed for table ${this.table.tableNumber}`);
    } else {
      console.log(`Table ${this.table.tableNumber} is not available`);
    }
  }

  cancel(): void {
    this.table.markAvailable();
    console.log(`Dine-in reservation cancelled for table ${this.table.tableNumber}`);
  }

  getDetails(): string {
    return `Dine-in reservation for ${this.customer.name} at table ${this.table.tableNumber} on ${this.dateTime.toISOString()}`;
  }
}
