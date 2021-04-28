import { UserEntity } from "../../../domain/User/UserEntity";
import { User } from "../../entities/User.entity";

export const fromUserEntityToDB = (user: UserEntity): User => {
  const dbUser = new User();
  if (user.Id) {
    dbUser.id = user.Id;
  }
  dbUser.country = user.Country;
  dbUser.firstName = user.FirstName;
  dbUser.lastName = user.LastName;
  dbUser.email = user.Email;
  dbUser.password = user.Password;

  return dbUser;
};

export const fromUserDBtoEntity = (user: User): UserEntity => {
  const userEntity = new UserEntity();
  userEntity.Id = user.id;
  userEntity.Password = user.password;
  userEntity.FirstName = user.firstName;
  userEntity.LastName = user.lastName;
  userEntity.Country = user.country;
  userEntity.IsActive = user.isActive;
  userEntity.CreatedAt = user.createdAt;

  return userEntity
};