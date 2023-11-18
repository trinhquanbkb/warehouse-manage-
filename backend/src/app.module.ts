import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';
import { RolesModule } from './roles/roles.module';
import { PermisstionsModule } from './permissions/permisstions.module';
import { WarehousesModule } from './warehouse/warehouses.module';


@Module({ 
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    UsersModule,
    AuthModule,
    ImagesModule,
    RolesModule,
    PermisstionsModule,
    WarehousesModule
  ],
})
export class AppModule { }
