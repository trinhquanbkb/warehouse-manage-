// roles.service.ts

import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WarehouseDocument } from '../schema/warehouse.schema';
import { WarehouseDTO } from '../dto/warehouse.dto';

@Injectable()
export class WarehousesService {
  constructor(@InjectModel('Warehouse') private roleModel: Model<WarehouseDocument>) {}

  async createRole(roleDto: WarehouseDTO): Promise<WarehouseDocument> {
    const createdRole = new this.roleModel(roleDto);
    return createdRole.save();
  }

  async findAllRoles(pagination: any, filter: FilterQuery<any>){
    const {  page, pageSize } = pagination;
    const skip = (page - 1) * pageSize;
    const data = await this.roleModel.find(filter).skip(skip).limit(parseInt(pageSize, 10)).exec();;
    const total = await this.roleModel.countDocuments(filter).exec();
    const paginations = {
      "page": page,
      "pageSize": pageSize,
      "total": total,
      "totalPage": Math.ceil(total / pageSize)
    }
    return { data, paginations, messenger: "succes" };
  }

  async findRoleById(id: string): Promise<WarehouseDocument | null> {
    return this.roleModel.findById(id).exec();
  }

  async updateRole(id: string, roleDto: WarehouseDTO): Promise<WarehouseDocument | null> {
    return this.roleModel.findByIdAndUpdate(id, roleDto, { new: true }).exec();
  }

  async deleteRole(id: string): Promise<WarehouseDocument | null> {
    return this.roleModel.findByIdAndRemove(id).exec();
  }
}
