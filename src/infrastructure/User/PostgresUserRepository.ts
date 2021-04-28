import { IUserRepository } from "../../domain/User/IUserRepository";
import { UserEntity } from "../../domain/User/UserEntity";
import { User } from "../entities/User.entity";
import { Inject } from "@nestjs/common";

export class PostgresUserRepository implements IUserRepository{
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
  ) {
  }

  CreateUser(user: UserEntity): Promise<UserEntity | undefined> {

    return undefined;
  }

  GetUserById(id: number): Promise<UserEntity | undefined> {
    const user = this.usersRepository.findByPk(id);

    return
  }

}