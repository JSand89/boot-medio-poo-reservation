export class Table {
  private tableNumber: number;
  private capacity: number;
  private isAvailable: boolean;

  constructor(tableNumber: number, capacity: number, isAvailable: boolean = true) {
    this.tableNumber = tableNumber;
    this.capacity = capacity;
    this.isAvailable = isAvailable;
  }

  public getTableNumber(): number {
    return this.tableNumber;
  }

  public getCapacity(): number {
    return this.capacity;
  }

  public getIsAvailable(): boolean {
    return this.isAvailable;
  }

  public markOccupied(): void {
    this.isAvailable = false;
  }

  public markAvailable(): void {
    this.isAvailable = true;
  }
}
