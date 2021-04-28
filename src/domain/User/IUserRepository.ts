import { UserEntity } from "./UserEntity";

export interface IUserRepository {
  CreateUser(user: UserEntity): Promise<UserEntity | undefined>
  GetUserById(id: number): Promise<UserEntity | undefined>
}