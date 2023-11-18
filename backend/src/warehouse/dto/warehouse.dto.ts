import { ApiProperty } from '@nestjs/swagger';

export class AddressDTO {
  @ApiProperty({ example: 'Quận 1', description: 'Quận' })
  district: string;

  @ApiProperty({ example: 'Phường 1', description: 'Phường' })
  wards: string;

  @ApiProperty({ example: 'Thành phố Hồ Chí Minh', description: 'Thành phố' })
  city: string;

  @ApiProperty({ example: '123 Đường ABC', description: 'Địa chỉ đường phố' })
  address: string;
}

export class WarehouseDTO {
  @ApiProperty({ example: 'Kho 1', description: 'Tên của kho hàng' })
  name: string;

  @ApiProperty({ type: AddressDTO, description: 'Địa chỉ kho hàng' })
  address: AddressDTO;
}
