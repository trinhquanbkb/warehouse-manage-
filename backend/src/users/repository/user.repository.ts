import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schema/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(filter: any): Promise<UserDocument | null> {
    return this.userModel
      .findOne(filter)
      .populate([
        {
          path: 'warehouse_id', // Tên trường trong schema FinancialTransaction
          model: 'Warehouse', // Tên collection
        },
        {
          path: 'role_id', // Tên trường trong schema FinancialTransaction
          model: 'Role', // Tên collection
        },
      ])
      .exec();
  }

  async create(createDto: CreateUserDto): Promise<UserDocument> {
    const created = new this.userModel(createDto);
    return await created.save();
  }

  async update(
    id: string,
    updateDto: Partial<UpdateUserDto>,
  ): Promise<UserDocument> {
    return await this.userModel.findByIdAndUpdate(id, updateDto);
  }

  async findAll(
    filter: FilterQuery<any>,
    skip: number,
    limit: number,
  ): Promise<UserDocument[]> {
    return this.userModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate([
        {
          path: 'warehouse_id',
          model: 'Warehouse',
        },
        {
          path: 'role_id',
          model: 'Role',
        },
      ])
      .exec();
  }
  async delete(_id: string): Promise<UserDocument> {
    return await this.userModel.findByIdAndDelete(_id);
  }
  async countAll(filter: any): Promise<number> {
    return this.userModel.countDocuments(filter).exec();
  }
}
