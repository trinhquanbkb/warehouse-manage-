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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user.repository");
<<<<<<< Updated upstream
const configuration_1 = require("../../config/configuration");
const bcrypt_1 = require("bcrypt");
=======
>>>>>>> Stashed changes
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
<<<<<<< Updated upstream
        createUserDto.password = (0, bcrypt_1.hashSync)(createUserDto.password, configuration_1.configs.saltOrRound);
        return await this.usersRepository.create(createUserDto);
    }
    async findAll(pagination, filter) {
        const { page, pageSize } = pagination;
        const skip = (page - 1) * pageSize;
        const data = await this.usersRepository.findAll(filter, skip, parseInt(pageSize, 10));
        const total = await this.usersRepository.countAll(filter);
        const paginations = {
            "page": page,
            "pageSize": pageSize,
            "total": total,
            "totalPage": Math.ceil(total / pageSize)
        };
        return { data, paginations, messenger: "succes" };
=======
        return await this.usersRepository.create(createUserDto);
    }
    async findAll() {
        return await this.usersRepository.findAll();
>>>>>>> Stashed changes
    }
    async findOne(filter) {
        return await this.usersRepository.findOne(filter);
    }
    async update(id, updateUserDto) {
        return await this.usersRepository.update(id, updateUserDto);
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map