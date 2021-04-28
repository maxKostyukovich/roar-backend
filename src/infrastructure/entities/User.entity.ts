import { Column, CreatedAt, IsEmail, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";

@Table
export class User extends Model {

  @PrimaryKey
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  country: string;

  @Column
  password: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}