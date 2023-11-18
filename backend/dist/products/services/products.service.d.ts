import { FilterQuery } from 'mongoose';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsRepository } from '../repository/product.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    create(createUserDto: CreateProductDto): Promise<import("../schema/product.schema").ProductDocument>;
    findAll(filter?: FilterQuery<any>): Promise<import("../schema/product.schema").ProductDocument[]>;
    findOne(filter: FilterQuery<any>): Promise<import("../schema/product.schema").ProductDocument>;
    update(id: string, updateUserDto: UpdateProductDto): Promise<import("../schema/product.schema").ProductDocument>;
    remove(id: string): Promise<import("../schema/product.schema").ProductDocument>;
    removeAll(filter: FilterQuery<any>): Promise<any>;
}
