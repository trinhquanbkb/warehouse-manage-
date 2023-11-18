import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ImagesService } from 'src/images/images.service';
export declare class ProductsController {
    private readonly productsService;
    private readonly imagesService;
    constructor(productsService: ProductsService, imagesService: ImagesService);
    create(createProductDto: CreateProductDto): Promise<void>;
    findAll(): Promise<import("../schema/product.schema").ProductDocument[]>;
    findByFillter(updateProductDto: UpdateProductDto): Promise<import("../schema/product.schema").ProductDocument[]>;
    findBySearch(search: any): Promise<{
        name: {
            name: string;
            language: string;
        }[];
        url: string;
        price: number;
    }[]>;
    findOne(id: string): Promise<import("../schema/product.schema").ProductDocument>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<void>;
    removeByParentID(parentID: any): Promise<any>;
    remove(id: string): Promise<import("../schema/product.schema").ProductDocument>;
}
