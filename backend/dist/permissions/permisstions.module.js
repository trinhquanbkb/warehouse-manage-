"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisstionsModule = void 0;
const common_1 = require("@nestjs/common");
const permisstions_service_1 = require("./services/permisstions.service");
const permissions_controller_1 = require("./controllers/permissions.controller");
const mongoose_1 = require("@nestjs/mongoose");
const permisstion_schema_1 = require("./schema/permisstion.schema");
let PermisstionsModule = class PermisstionsModule {
};
PermisstionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: permisstion_schema_1.Permisstion.name, schema: permisstion_schema_1.PermisstionSchema }]),
        ],
        controllers: [permissions_controller_1.PermisstionsController],
        providers: [permisstions_service_1.PermisstionsService],
        exports: [],
    })
], PermisstionsModule);
exports.PermisstionsModule = PermisstionsModule;
//# sourceMappingURL=permisstions.module.js.map