import { UsersService } from '../services/users.service';
<<<<<<< Updated upstream
import { UpdateUserDto } from '../dto/update-user.dto';
import { FilterQuery } from 'mongoose';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(pagination: any, filter: FilterQuery<any>): Promise<{
        data: import("../schema/user.schema").UserDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
=======
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    findAll(): Promise<import("../schema/user.schema").UserDocument[]>;
>>>>>>> Stashed changes
    findOne(id: string): Promise<import("../schema/user.schema").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    remove(id: string): string;
}
