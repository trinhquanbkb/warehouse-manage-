import { PipeTransform } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { SignInDto } from '../dto/sign-in.dto';
export declare class SignInValidation implements PipeTransform<any> {
    protected readonly usersService: UsersService;
    constructor(usersService: UsersService);
    transform(value: SignInDto): Promise<SignInDto>;
    validateLogIn(value: any): Promise<{
        id: any;
    }>;
}
