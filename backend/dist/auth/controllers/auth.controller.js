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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../services/auth.service");
const sign_up_dto_1 = require("../dto/sign-up.dto");
const sign_in_dto_1 = require("../dto/sign-in.dto");
const signUpValidation_pipe_1 = require("../pipes/signUpValidation.pipe");
const signInValidation_pipe_1 = require("../pipes/signInValidation.pipe");
const jwt_guard_1 = require("../guards/jwt.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
<<<<<<< Updated upstream
    async signUp(body, req) {
        console.log(req.user);
        body.parent_id = req.user.userId;
=======
    async signUp(body) {
>>>>>>> Stashed changes
        const data = await this.authService.signUp(body);
        return data;
    }
    async signIn(body) {
        return await this.authService.signIn(body);
    }
<<<<<<< Updated upstream
};
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    __param(0, (0, common_1.Body)(signUpValidation_pipe_1.SignUpValidation)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto, Object]),
=======
    async activeAccount() {
        return true;
    }
};
__decorate([
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)(signUpValidation_pipe_1.SignUpValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto]),
>>>>>>> Stashed changes
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)(signInValidation_pipe_1.SignInValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
<<<<<<< Updated upstream
=======
__decorate([
    (0, common_1.Get)('check'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activeAccount", null);
>>>>>>> Stashed changes
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map