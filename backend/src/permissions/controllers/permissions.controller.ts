// roles.controller.ts

import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { PermisstionsService } from '../services/permisstions.service';
import { PermisstionsDTO } from '../dto/permisstions.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FilterQuery } from 'mongoose';

@Controller('permisstions')
@ApiTags('Permisstions')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('authorization')
export class PermisstionsController {
  constructor(private readonly permisstionsService: PermisstionsService) {}

  @Post()
  createRole(@Body() roleDto: PermisstionsDTO) {
    return this.permisstionsService.createRole(roleDto);
  }

  @Get()
  @ApiQuery({ name: 'page', type: Number, required: false, description: 'Page number' })
  @ApiQuery({ name: 'pageSize', type: Number, required: false, description: 'Page size' })
  @ApiQuery({ name: 'filter', type: 'object', required: false, description: 'Filter' })
  async findAll(@Query() pagination: any, @Query('filter') filter: FilterQuery<any>) {
    return this.permisstionsService.findAllRoles(pagination, filter);
  }

  @Get(':id')
  findRoleById(@Param('id') id: string) {
    return this.permisstionsService.findRoleById(id);
  }

  @Put(':id')
  updateRole(@Param('id') id: string, @Body() roleDto: PermisstionsDTO) {
    return this.permisstionsService.updateRole(id, roleDto);
  }

  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    return this.permisstionsService.deleteRole(id);
  }
}
