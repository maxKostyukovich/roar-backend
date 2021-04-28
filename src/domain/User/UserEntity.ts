export class UserEntity {
  private id: number;
  private email: string;
  private country: string;
  private firstName: string;
  private lastName: string;
  private isActive: boolean;
  private password: string;
  private createdAt: Date;


  get Id(): number { return this.id; }
  set Id (value: number) { this.id = value; }

  get Email(): string { return this.email; }
  set Email (value: string) { this.email = value; }

  get Password(): string { return this.password; }
  set Password (value: string) { this.password = value; }

  get Country(): string { return this.country; }
  set Country (value: string) { this.country = value; }

  get FirstName(): string { return this.firstName; }
  set FirstName (value: string) { this.firstName = value; }

  get LastName(): string { return this.lastName; }
  set LastName (value: string) { this.lastName = value; }

  get IsActive(): boolean { return this.isActive; }
  set IsActive (value: boolean) { this.isActive = value; }

  get CreatedAt(): Date { return this.createdAt; }
  set CreatedAt (value: Date) { this.createdAt = value; }
}