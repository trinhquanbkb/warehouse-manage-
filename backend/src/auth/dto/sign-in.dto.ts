import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({example: "admin@gmail.com", description: 'email đăng ký'})
  email: string;

  @ApiProperty({example: '123456', description: 'mật khẩu'})
  password: string;
}
