import { Model } from 'mongoose';
import { RoleDocument } from '../schema/warehouse.schema';
import { RoleDTO } from '../dto/warehouse.dto';
export declare class RolesService {
    private roleModel;
    constructor(roleModel: Model<RoleDocument>);
    createRole(roleDto: RoleDTO): Promise<RoleDocument>;
    findAllRoles(): Promise<RoleDocument[]>;
    findRoleById(id: string): Promise<RoleDocument | null>;
    updateRole(id: string, roleDto: RoleDTO): Promise<RoleDocument | null>;
    deleteRole(id: string): Promise<RoleDocument | null>;
}
