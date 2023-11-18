import { FilterQuery, Model } from 'mongoose';
import { PermisstionDocument } from '../schema/permisstion.schema';
import { PermisstionsDTO } from '../dto/permisstions.dto';
export declare class PermisstionsService {
    private permisstionsModel;
    constructor(permisstionsModel: Model<PermisstionDocument>);
    createRole(permisstionsDto: PermisstionsDTO): Promise<PermisstionDocument>;
    findAllRoles(pagination: any, filter: FilterQuery<any>): Promise<{
        data: PermisstionDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<PermisstionDocument | null>;
    updateRole(id: string, permisstionsDto: PermisstionsDTO): Promise<PermisstionDocument | null>;
    deleteRole(id: string): Promise<PermisstionDocument | null>;
}
