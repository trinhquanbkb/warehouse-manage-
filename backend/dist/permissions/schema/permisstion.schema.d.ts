import { Document } from 'mongoose';
export type PermisstionDocument = Permisstion & Document;
export declare class Permisstion {
    name: string;
}
export declare const PermisstionSchema: import("mongoose").Schema<Document<Permisstion, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
