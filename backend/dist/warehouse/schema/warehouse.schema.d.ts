import { Document } from 'mongoose';
export type WarehouseDocument = Warehouse & Document;
export declare class Warehouse {
    name: string;
    address: {
        district: string;
        wards: string;
        city: string;
        address: string;
    };
}
export declare const WarehouseSchema: import("mongoose").Schema<Document<Warehouse, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
