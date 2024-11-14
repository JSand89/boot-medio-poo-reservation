import { Reservation } from './reservation';
import { Customer } from './customer';

export class EventReservation extends Reservation {
  constructor(
    reservationId: number,
    customer: Customer,
    dateTime: Date,
    numberOfGuests: number,
    public eventSpace: string
  ) {
    super(reservationId, customer, dateTime, numberOfGuests);
  }

  confirm(): void {
    console.log(`Event reservation confirmed for ${this.eventSpace}`);
  }

  cancel(): void {
    console.log(`Event reservation cancelled for ${this.eventSpace}`);
  }
}
