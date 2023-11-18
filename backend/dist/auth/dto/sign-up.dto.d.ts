<<<<<<< Updated upstream
export declare class SignUpDto {
    username: string;
    password: string;
    email: string;
    phone: number;
    role_id: Array<string>;
    parent_id: string;
    warehouse_id: string;
=======
import { Role } from '../enums/types.enum';
export declare class SignUpDto {
    username: string;
    password: string;
    role: Role[];
>>>>>>> Stashed changes
}
