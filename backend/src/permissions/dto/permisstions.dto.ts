import { IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermisstionsDTO {
  @ApiProperty({ example: 'Admin', description: 'Tên của quyền' })
  @IsString()
  name: string;
}