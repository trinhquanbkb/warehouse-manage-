import { Document } from 'mongoose';
export type RoleDocument = Role & Document;
export declare class Role {
    name: string;
    permissionIds: string[];
}
export declare const RoleSchema: import("mongoose").Schema<Document<Role, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
