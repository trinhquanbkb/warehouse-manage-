// roles.controller.ts

import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards,Query } from '@nestjs/common';
import { WarehousesService } from '../services/warehouses.service';
import { WarehouseDTO } from '../dto/warehouse.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FilterQuery } from 'mongoose';

@Controller('warehouses')
@ApiTags('Warehouses')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('authorization')
export class WarehousesController {
  constructor(private readonly rolesService: WarehousesService) {}

  @Post()
  createRole(@Body() roleDto: WarehouseDTO) {
    return this.rolesService.createRole(roleDto);
  }

  @Get()
  @ApiQuery({ name: 'page', type: Number, required: false, description: 'Page number' })
  @ApiQuery({ name: 'pageSize', type: Number, required: false, description: 'Page size' })
  @ApiQuery({ name: 'filter', type: 'object', required: false, description: 'Filter' })
  async findAll(@Query() pagination: any, @Query('filter') filter: FilterQuery<any>) {
    return this.rolesService.findAllRoles(pagination, filter);
  }

  @Get(':id')
  findRoleById(@Param('id') id: string) {
    return this.rolesService.findRoleById(id);
  }

  @Put(':id')
  updateRole(@Param('id') id: string, @Body() roleDto: WarehouseDTO) {
    return this.rolesService.updateRole(id, roleDto);
  }

  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    return this.rolesService.deleteRole(id);
  }
}
