import { FilterQuery, Model } from 'mongoose';
import { RoleDocument } from '../schema/role.schema';
import { RoleDTO } from '../dto/roles.dto';
export declare class RolesService {
    private roleModel;
    constructor(roleModel: Model<RoleDocument>);
    createRole(roleDto: RoleDTO): Promise<RoleDocument>;
    findAllRoles(pagination: any, filter: FilterQuery<any>): Promise<{
        data: RoleDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<RoleDocument | null>;
    updateRole(id: string, roleDto: RoleDTO): Promise<RoleDocument | null>;
    deleteRole(id: string): Promise<RoleDocument | null>;
}
