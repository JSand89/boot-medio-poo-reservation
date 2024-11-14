export class Table {
    constructor(
      public tableNumber: number,
      public capacity: number,
      public isAvailable: boolean = true
    ) {}
  
    markOccupied(): void {
      this.isAvailable = false;
    }
  
    markAvailable(): void {
      this.isAvailable = true;
    }
  }
  