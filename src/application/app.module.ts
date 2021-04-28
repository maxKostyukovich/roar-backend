import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from "../infrastructure/entities/User.entity";
import { AuthController } from "./controllers/auth.controller";
import { PostgresUserRepository } from "../infrastructure/User/PostgresUserRepository";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'roar',
      models: [User],
      repositoryMode: true,
    })
  ],
  controllers: [AuthController],
  providers: [
    AppService,
    {
      provide: "IUserRepository",
      useClass: PostgresUserRepository
    },
    {
      provide: 'UsersRepository',
      useValue: User,
    },

  ],
})
export class AppModule {}
