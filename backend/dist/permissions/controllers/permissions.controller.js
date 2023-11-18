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
exports.PermisstionsController = void 0;
const common_1 = require("@nestjs/common");
const permisstions_service_1 = require("../services/permisstions.service");
const permisstions_dto_1 = require("../dto/permisstions.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
let PermisstionsController = class PermisstionsController {
    constructor(permisstionsService) {
        this.permisstionsService = permisstionsService;
    }
    createRole(roleDto) {
        return this.permisstionsService.createRole(roleDto);
    }
    async findAll(pagination, filter) {
        return this.permisstionsService.findAllRoles(pagination, filter);
    }
    findRoleById(id) {
        return this.permisstionsService.findRoleById(id);
    }
    updateRole(id, roleDto) {
        return this.permisstionsService.updateRole(id, roleDto);
    }
    deleteRole(id) {
        return this.permisstionsService.deleteRole(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permisstions_dto_1.PermisstionsDTO]),
    __metadata("design:returntype", void 0)
], PermisstionsController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', type: Number, required: false, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', type: Number, required: false, description: 'Page size' }),
    (0, swagger_1.ApiQuery)({ name: 'filter', type: 'object', required: false, description: 'Filter' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PermisstionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermisstionsController.prototype, "findRoleById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, permisstions_dto_1.PermisstionsDTO]),
    __metadata("design:returntype", void 0)
], PermisstionsController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PermisstionsController.prototype, "deleteRole", null);
PermisstionsController = __decorate([
    (0, common_1.Controller)('permisstions'),
    (0, swagger_1.ApiTags)('Permisstions'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    __metadata("design:paramtypes", [permisstions_service_1.PermisstionsService])
], PermisstionsController);
exports.PermisstionsController = PermisstionsController;
//# sourceMappingURL=permissions.controller.js.map