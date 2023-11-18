import { ObjectId } from 'mongodb';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { omit } from 'lodash';
import { UsersService } from 'src/users/services/users.service';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { compareSync, hashSync } from 'bcrypt';
import { configs } from 'src/config/configuration';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: SignUpDto) {
    data.password = hashSync(data.password, configs.saltOrRound)
    return await this.userService.create(data);
  }

  async signIn(data: SignInDto) {
    const user = await this.userService.findOne({ email: data.email });
    const credential = omit(user.toObject(), [
      'password',
      'createdAt',
      'updatedAt',
      '__v',
    ]);

    const accessToken = await this.jwtService.signAsync(credential);

    return { accessToken, credential };
  }

  async checkIfDataSeeded(): Promise<boolean> {
    // Kiểm tra xem có người dùng admin trong cơ sở dữ liệu hay không
    const adminUser = await this.userService.findOne({ email: 'admin@gmail.com' });
    return !!adminUser; // Trả về true nếu có adminUser, ngược lại false
  }
}
