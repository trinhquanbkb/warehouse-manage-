import { WarehousesService } from '../services/warehouses.service';
import { WarehouseDTO } from '../dto/warehouse.dto';
import { FilterQuery } from 'mongoose';
export declare class WarehousesController {
    private readonly rolesService;
    constructor(rolesService: WarehousesService);
    createRole(roleDto: WarehouseDTO): Promise<import("../schema/warehouse.schema").WarehouseDocument>;
    findAll(pagination: any, filter: FilterQuery<any>): Promise<{
        data: import("../schema/warehouse.schema").WarehouseDocument[];
        paginations: {
            page: any;
            pageSize: any;
            total: number;
            totalPage: number;
        };
        messenger: string;
    }>;
    findRoleById(id: string): Promise<import("../schema/warehouse.schema").WarehouseDocument>;
    updateRole(id: string, roleDto: WarehouseDTO): Promise<import("../schema/warehouse.schema").WarehouseDocument>;
    deleteRole(id: string): Promise<import("../schema/warehouse.schema").WarehouseDocument>;
}
