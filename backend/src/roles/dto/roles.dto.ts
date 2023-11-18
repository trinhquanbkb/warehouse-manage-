import { IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDTO {
  @ApiProperty({ example: 'Admin', description: 'Tên của vai trò' })
  @IsString()
  name: string;

  @ApiProperty({ example: [], description: 'Mảng ID của quyền (permissions)' })
  @IsArray()
  permissionIds: string[];
}