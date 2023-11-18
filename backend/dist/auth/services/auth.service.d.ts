import { UsersService } from 'src/users/services/users.service';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
<<<<<<< Updated upstream
=======
import { ActiveDto } from '../dto/active.dto';
>>>>>>> Stashed changes
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signUp(data: SignUpDto): Promise<import("../../users/schema/user.schema").UserDocument>;
    signIn(data: SignInDto): Promise<{
        accessToken: string;
        credential: any;
    }>;
<<<<<<< Updated upstream
    checkIfDataSeeded(): Promise<boolean>;
=======
    activeAccount(body: ActiveDto, token: string): Promise<{
        accessToken: string;
        credential: any;
    }>;
>>>>>>> Stashed changes
}
