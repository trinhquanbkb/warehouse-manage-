"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const body_parser_1 = require("body-parser");
<<<<<<< Updated upstream
const users_service_1 = require("./users/services/users.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const userService = app.get(users_service_1.UsersService);
    const adminUser = await userService.findOne({ email: 'admin@gmail.com' });
    if (!adminUser) {
        let admin = {
            "username": "admin",
            "password": "123456",
            "email": "admin@gmail.com",
            "phone": 0,
            "role_id": null,
            "parent_id": null,
            "warehouse_id": null
        };
        await userService.create(admin);
        console.log('Admin user created successfully.');
    }
=======
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
>>>>>>> Stashed changes
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Manage Point API Document')
        .setDescription('Manage Point API Document')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'authorization')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use((0, body_parser_1.json)({ limit: '50mb' }));
    await app.listen(3303);
}
bootstrap();
//# sourceMappingURL=main.js.map