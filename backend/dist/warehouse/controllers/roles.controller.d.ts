import { RolesService } from '../services/roles.service';
import { RoleDTO } from '../dto/roles.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    createRole(roleDto: RoleDTO): Promise<import("../schema/role.schema").RoleDocument>;
    findAllRoles(): Promise<import("../schema/role.schema").RoleDocument[]>;
    findRoleById(id: string): Promise<import("../schema/role.schema").RoleDocument>;
    updateRole(id: string, roleDto: RoleDTO): Promise<import("../schema/role.schema").RoleDocument>;
    deleteRole(id: string): Promise<import("../schema/role.schema").RoleDocument>;
}
