"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("../services/products.service");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const images_service_1 = require("../../images/images.service");
let ProductsController = class ProductsController {
    constructor(productsService, imagesService) {
        this.productsService = productsService;
        this.imagesService = imagesService;
    }
    async create(createProductDto) {
        createProductDto.url = await this.imagesService.upload(createProductDto.url);
        Promise.all(createProductDto.images.map(async (image) => (Object.assign(Object.assign({}, image), { url: await this.imagesService.upload(image.url) })))).then(images => {
            createProductDto.images = images;
            return this.productsService.create(createProductDto);
        });
    }
    findAll() {
        return this.productsService.findAll();
    }
    findByFillter(updateProductDto) {
        return this.productsService.findAll(updateProductDto);
    }
    async findBySearch(search) {
        const products = await this.productsService.findAll({
            name: {
                $elemMatch: {
                    name: {
                        $regex: search.query,
                        $options: "i"
                    }
                }
            }
        });
        let values = await Promise.all(products.map(async (e) => ({
            name: e.name,
            url: e.url,
            price: e.price,
        })));
        let rs = values.map(v => ({
            name: v.name,
            url: v.url,
            price: v.price,
        }));
        return rs;
    }
    findOne(id) {
        return this.productsService.findOne({ _id: id });
    }
    async update(id, updateProductDto) {
        updateProductDto.url = await this.imagesService.upload(updateProductDto.url);
        Promise.all(updateProductDto.images.map(async (image) => (Object.assign(Object.assign({}, image), { url: await this.imagesService.upload(image.url) })))).then(images => {
            updateProductDto.images = images;
            return this.productsService.update(id, updateProductDto);
        });
    }
    async removeByParentID(parentID) {
        const products = await this.productsService.findAll({ category_id: parentID === null || parentID === void 0 ? void 0 : parentID.id });
        products.forEach(async (p) => {
            const product = await this.productsService.findOne({ _id: p === null || p === void 0 ? void 0 : p.id });
            this.imagesService.delete(product.url.split('/').pop());
            product.images.forEach((image) => ({
                url: this.imagesService.delete(image.url.split('/').pop())
            }));
        });
        return this.productsService.removeAll({ category_id: parentID === null || parentID === void 0 ? void 0 : parentID.id });
    }
    async remove(id) {
        const product = await this.productsService.findOne({ _id: id });
        this.imagesService.delete(product.url.split('/').pop());
        product.images.forEach((image) => ({
            url: this.imagesService.delete(image.url.split('/').pop())
        }));
        return this.productsService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('find'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findByFillter", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findBySearch", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Post)('deleteByParentID'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "removeByParentID", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    (0, swagger_1.ApiTags)('Products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService, images_service_1.ImagesService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map