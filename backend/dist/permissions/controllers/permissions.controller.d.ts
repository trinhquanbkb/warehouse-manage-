import { PermisstionsService } from '../services/permisstions.service';
import { PermisstionsDTO } from '../dto/permisstions.dto';
import { FilterQuery } from 'mongoose';
export declare class PermisstionsController {
    private readonly permisstionsService;
    constructor(permisstionsService: PermisstionsService);
    createRole(roleDto: PermisstionsDTO): Promise<import("../schema/permisstion.schema").PermisstionDocument>;
    findAll(pagination: any, filter: FilterQuery<any>): Promise<{
        data: import("../schema/permisstion.schema").PermisstionDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<import("../schema/permisstion.schema").PermisstionDocument>;
    updateRole(id: string, roleDto: PermisstionsDTO): Promise<import("../schema/permisstion.schema").PermisstionDocument>;
    deleteRole(id: string): Promise<import("../schema/permisstion.schema").PermisstionDocument>;
}
