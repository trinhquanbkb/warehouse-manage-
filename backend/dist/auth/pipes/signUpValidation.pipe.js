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
exports.SignUpValidation = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/services/users.service");
const types_enum_1 = require("../enums/types.enum");
const regex_1 = require("../utils/regex");
let SignUpValidation = class SignUpValidation {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async transform(value) {
        await this.validateUsername(value);
        this.validateRole(value);
        return value;
    }
    async validateUsername(value) {
        const username = value.username;
        const existUsername = await this.usersService.findOne({ username });
        if (existUsername) {
            throw new common_1.BadRequestException('Username has been already used');
        }
        if (!regex_1.regUsername.test(username)) {
            throw new common_1.BadRequestException('Username must include string and number may include _ and – having a length of 3 to 16 characters ');
        }
    }
    validateRole(value) {
        const role = value.role;
        role === null || role === void 0 ? void 0 : role.map((r) => {
            if (!Object.values(types_enum_1.Role).includes(r)) {
                throw new common_1.BadRequestException('Role is invalid');
            }
        });
    }
};
SignUpValidation = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], SignUpValidation);
exports.SignUpValidation = SignUpValidation;
//# sourceMappingURL=signUpValidation.pipe.js.map