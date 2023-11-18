import {
  Injectable,
  PipeTransform,
  UnauthorizedException,
} from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/services/users.service';
import { SignInDto } from '../dto/sign-in.dto';

@Injectable()
export class SignInValidation implements PipeTransform<any> {
  constructor(protected readonly usersService: UsersService) {}
  async transform(value: SignInDto) {
    await this.validateLogIn(value);
    return value;
  }

  async validateLogIn(value: any) {
    const email = value.email;
    const password = value.password;

    const user = await this.usersService.findOne({ email });

    if (!user) {
      return { id: null };
    }

    if (!compareSync(password, user.password)) {
      throw new UnauthorizedException('Username/password is invalid');
    }
  }
}
