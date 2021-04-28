import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(8);
@Injectable()
export class AppService {

  hashPassword(password: string): string{
    return bcrypt.hashSync(password, salt);
  }

}
