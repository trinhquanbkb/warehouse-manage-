import { PipeTransform } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
export declare class ActiveValidation implements PipeTransform<any> {
    protected readonly usersService: UsersService;
    constructor(usersService: UsersService);
    transform(value: any): Promise<any>;
    validateOldPassword(value: any): Promise<boolean>;
}
