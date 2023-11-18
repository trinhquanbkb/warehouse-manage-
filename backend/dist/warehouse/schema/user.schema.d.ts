import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    email: string;
    username: string;
    phone: number;
    parent_id: string;
    password: string;
    role_id?: Array<String>;
    warehouse_id?: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
