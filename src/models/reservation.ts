import { Customer } from './customer';

export abstract class Reservation {
  private reservationId: number;
  private customer: Customer;
  private dateTime: Date;
  private numberOfGuests: number;

  constructor(
    reservationId: number,
    customer: Customer,
    dateTime: Date,
    numberOfGuests: number
  ) {
    this.reservationId = reservationId;
    this.customer = customer;
    this.dateTime = dateTime;
    this.numberOfGuests = numberOfGuests;
  }

  public getReservationId(): number {
    return this.reservationId;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public getDateTime(): Date {
    return this.dateTime;
  }

  public getNumberOfGuests(): number {
    return this.numberOfGuests;
  }

  public setDateTime(newDateTime: Date): void {
    this.dateTime = newDateTime;
  }

  public setNumberOfGuests(newNumberOfGuests: number): void {
    this.numberOfGuests = newNumberOfGuests;
  }

  // Métodos abstractos
  abstract confirm(): void;
  abstract cancel(): void;
}
