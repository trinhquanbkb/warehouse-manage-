import { FilterQuery, Model } from 'mongoose';
import { UserDocument } from '../schema/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(filter: FilterQuery<any>): Promise<UserDocument | null>;
    create(createDto: CreateUserDto): Promise<UserDocument>;
    update(id: string, updateDto: Partial<UpdateUserDto>): Promise<UserDocument>;
    findAll(filter?: FilterQuery<any>): Promise<UserDocument[]>;
    delete(_id: string): Promise<UserDocument>;
}
