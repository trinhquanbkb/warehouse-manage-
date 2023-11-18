import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  role_id: Array<string>;

  @ApiProperty()
  parent_id: string;

  @ApiProperty()
  warehouse_id: string;
}
