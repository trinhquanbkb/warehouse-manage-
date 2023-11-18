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
exports.SignInDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignInDto {
}
__decorate([
<<<<<<< Updated upstream
    (0, swagger_1.ApiProperty)({ example: "admin@gmail.com", description: 'email đăng ký' }),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', description: 'mật khẩu' }),
=======
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
>>>>>>> Stashed changes
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
exports.SignInDto = SignInDto;
//# sourceMappingURL=sign-in.dto.js.map