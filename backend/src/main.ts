import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json } from 'body-parser';
import { UsersService } from './users/services/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const userService = app.get(UsersService);
  
  const adminUser = await userService.findOne({email: 'admin@gmail.com'})
  if (!adminUser) {

    let admin = {
      "username": "admin",
      "password": "123456",
      "email": "admin@gmail.com",
      "phone": 0,
      "role_id": null,
      "parent_id": null,
      "warehouse_id": null
    }
    await userService.create(admin);
    console.log('Admin user created successfully.');
  }

  const config = new DocumentBuilder()
    .setTitle('Manage Point API Document')
    .setDescription('Manage Point API Document')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.use(json({ limit: '50mb' }));
  await app.listen(3303);
}
bootstrap();
