import { Document } from 'mongoose';
export type ProductDocument = Product & Document;
type typeName = {
    name: string;
    language: string;
};
type typeDes = {
    des: string;
    language: string;
};
type typeImage = {
    name: typeName[];
    url: string;
    description: typeDes[];
};
export declare class Product {
    name: typeName[];
    description?: typeDes[];
    condition: string;
    size: string;
    weight: string;
    url: string;
    images: typeImage[];
    category_id: string;
    price: number;
    discounts?: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
export {};
