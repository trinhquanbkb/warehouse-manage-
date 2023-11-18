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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt_1 = require("bcrypt");
const configuration_1 = require("../../config/configuration");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
<<<<<<< Updated upstream
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number,
    }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "parent_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
        default: (0, bcrypt_1.hashSync)('123456', configuration_1.configs.saltOrRound),
=======
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
        default: (0, bcrypt_1.hashSync)('12345678', configuration_1.configs.saltOrRound),
>>>>>>> Stashed changes
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Array,
<<<<<<< Updated upstream
    }),
    __metadata("design:type", Array)
], User.prototype, "role_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "warehouse_id", void 0);
=======
        default: ['ADMIN'],
    }),
    __metadata("design:type", Array)
], User.prototype, "role", void 0);
>>>>>>> Stashed changes
User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map