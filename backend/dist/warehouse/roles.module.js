"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const warehouses_service_1 = require("./services/warehouses.service");
const warehouses_controller_1 = require("./controllers/warehouses.controller");
const mongoose_1 = require("@nestjs/mongoose");
const warehouse_schema_1 = require("./schema/warehouse.schema");
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: warehouse_schema_1.Role.name, schema: warehouse_schema_1.RoleSchema }]),
        ],
        controllers: [warehouses_controller_1.RolesController],
        providers: [warehouses_service_1.RolesService],
        exports: [],
    })
], RolesModule);
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map