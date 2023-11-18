import { AuthService } from '../services/auth.service';
import { SignUpDto } from '../dto/sign-up.dto';
import { SignInDto } from '../dto/sign-in.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
<<<<<<< Updated upstream
    signUp(body: SignUpDto, req: any): Promise<import("../../users/schema/user.schema").UserDocument>;
=======
    signUp(body: SignUpDto): Promise<import("../../users/schema/user.schema").UserDocument>;
>>>>>>> Stashed changes
    signIn(body: SignInDto): Promise<{
        accessToken: string;
        credential: any;
    }>;
<<<<<<< Updated upstream
=======
    activeAccount(): Promise<boolean>;
>>>>>>> Stashed changes
}
