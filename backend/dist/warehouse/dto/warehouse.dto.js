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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseDTO = exports.AddressDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddressDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Quận 1', description: 'Quận' }),
    __metadata("design:type", String)
], AddressDTO.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Phường 1', description: 'Phường' }),
    __metadata("design:type", String)
], AddressDTO.prototype, "wards", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Thành phố Hồ Chí Minh', description: 'Thành phố' }),
    __metadata("design:type", String)
], AddressDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Đường ABC', description: 'Địa chỉ đường phố' }),
    __metadata("design:type", String)
], AddressDTO.prototype, "address", void 0);
exports.AddressDTO = AddressDTO;
class WarehouseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kho 1', description: 'Tên của kho hàng' }),
    __metadata("design:type", String)
], WarehouseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AddressDTO, description: 'Địa chỉ kho hàng' }),
    __metadata("design:type", AddressDTO)
], WarehouseDTO.prototype, "address", void 0);
exports.WarehouseDTO = WarehouseDTO;
//# sourceMappingURL=warehouse.dto.js.map