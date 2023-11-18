import { RolesService } from '../services/roles.service';
import { RoleDTO } from '../dto/roles.dto';
import { FilterQuery } from 'mongoose';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    createRole(roleDto: RoleDTO): Promise<import("../schema/role.schema").RoleDocument>;
    findAllRoles(pagination: any, filter: FilterQuery<any>): Promise<{
        data: import("../schema/role.schema").RoleDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<import("../schema/role.schema").RoleDocument>;
    updateRole(id: string, roleDto: RoleDTO): Promise<import("../schema/role.schema").RoleDocument>;
    deleteRole(id: string): Promise<import("../schema/role.schema").RoleDocument>;
}
