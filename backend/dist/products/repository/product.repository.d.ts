import { FilterQuery, Model } from 'mongoose';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductDocument } from '../schema/product.schema';
export declare class ProductsRepository {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    findOne(filter: FilterQuery<any>): Promise<ProductDocument | null>;
    create(createDto: CreateProductDto): Promise<ProductDocument>;
    update(id: string, updateDto: Partial<UpdateProductDto>): Promise<ProductDocument>;
    findAll(filter?: FilterQuery<any>): Promise<ProductDocument[]>;
    delete(_id: string): Promise<ProductDocument>;
    deleteMany(filter?: FilterQuery<any>): Promise<any>;
}
