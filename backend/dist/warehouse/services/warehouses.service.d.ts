import { FilterQuery, Model } from 'mongoose';
import { WarehouseDocument } from '../schema/warehouse.schema';
import { WarehouseDTO } from '../dto/warehouse.dto';
export declare class WarehousesService {
    private roleModel;
    constructor(roleModel: Model<WarehouseDocument>);
    createRole(roleDto: WarehouseDTO): Promise<WarehouseDocument>;
    findAllRoles(pagination: any, filter: FilterQuery<any>): Promise<{
        data: WarehouseDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<WarehouseDocument | null>;
    updateRole(id: string, roleDto: WarehouseDTO): Promise<WarehouseDocument | null>;
    deleteRole(id: string): Promise<WarehouseDocument | null>;
}
