// roles.controller.ts

import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { RoleDTO } from '../dto/roles.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FilterQuery } from 'mongoose';

@Controller('roles')
@ApiTags('Roles')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('authorization')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  createRole(@Body() roleDto: RoleDTO) {
    return this.rolesService.createRole(roleDto);
  }

  @ApiQuery({ name: 'page', type: Number, required: false, description: 'Page number' })
  @ApiQuery({ name: 'pageSize', type: Number, required: false, description: 'Page size' })
  @ApiQuery({ name: 'filter', type: 'object', required: false, description: 'Filter' })
  @Get()
  findAllRoles(@Query() pagination: any, @Query('filter') filter: FilterQuery<any>) {
    return this.rolesService.findAllRoles(pagination, filter);
  }

  @Get(':id')
  findRoleById(@Param('id') id: string) {
    return this.rolesService.findRoleById(id);
  }

  @Put(':id')
  updateRole(@Param('id') id: string, @Body() roleDto: RoleDTO) {
    return this.rolesService.updateRole(id, roleDto);
  }

  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    return this.rolesService.deleteRole(id);
  }
}
