export class Customer {
  // Propiedades privadas para proteger los datos del cliente
  private name: string;
  private phoneNumber: string;
  private email?: string;

  constructor(name: string, phoneNumber: string, email?: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  // Métodos getters y setters para acceder a las propiedades
  public getName(): string {
    return this.name;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }
}
