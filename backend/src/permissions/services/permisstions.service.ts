// roles.service.ts

import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PermisstionDocument } from '../schema/permisstion.schema';
import { PermisstionsDTO } from '../dto/permisstions.dto';

@Injectable()
export class PermisstionsService {
  constructor(@InjectModel('Permisstion') private permisstionsModel: Model<PermisstionDocument>) {}

  async createRole(permisstionsDto: PermisstionsDTO): Promise<PermisstionDocument> {
    const createdRole = new this.permisstionsModel(permisstionsDto);
    return createdRole.save();
  }

  async findAllRoles(pagination: any, filter: FilterQuery<any>){
    const {  page, pageSize } = pagination;
    const skip = (page - 1) * pageSize;
    const data = await this.permisstionsModel.find(filter).skip(skip).limit(parseInt(pageSize, 10)).exec();;
    const total = await this.permisstionsModel.countDocuments(filter).exec();
    const paginations = {
      "page": page,
      "pageSize": pageSize,
      "total": total,
      "totalPage": Math.ceil(total / pageSize)
    }
    return { data, paginations, messenger: "succes" };
  }

  async findRoleById(id: string): Promise<PermisstionDocument | null> {
    return this.permisstionsModel.findById(id).exec();
  }

  async updateRole(id: string, permisstionsDto: PermisstionsDTO): Promise<PermisstionDocument | null> {
    return this.permisstionsModel.findByIdAndUpdate(id, permisstionsDto, { new: true }).exec();
  }

  async deleteRole(id: string): Promise<PermisstionDocument | null> {
    return this.permisstionsModel.findByIdAndRemove(id).exec();
  }
}
