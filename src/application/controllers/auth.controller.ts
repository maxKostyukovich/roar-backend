import { Controller, Inject } from "@nestjs/common";
import { IUserRepository } from "../../domain/User/IUserRepository";
import { AppService } from "../app.service";

@Controller()
export class AuthController {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
    private readonly appService: AppService
  ) {
  }
}