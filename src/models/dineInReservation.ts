import { Reservation } from './reservation';
import { Customer } from './customer';
import { Table } from './table';

export class DineInReservation extends Reservation {
  private table: Table;

  constructor(
    reservationId: number,
    customer: Customer,
    dateTime: Date,
    numberOfGuests: number,
    table: Table
  ) {
    super(reservationId, customer, dateTime, numberOfGuests);
    this.table = table;
  }

  public getTable(): Table {
    return this.table;
  }

  public confirm(): void {
    if (this.table.getIsAvailable()) {
      this.table.markOccupied();
      console.log(`Dine-in reservation confirmed for table ${this.table.getTableNumber()}`);
    } else {
      console.log(`Table ${this.table.getTableNumber()} is not available`);
    }
  }

  public cancel(): void {
    this.table.markAvailable();
    console.log(`Dine-in reservation cancelled for table ${this.table.getTableNumber()}`);
  }
}
