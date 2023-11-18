import {  Module } from '@nestjs/common';
import { PermisstionsService } from './services/permisstions.service';
import { PermisstionsController } from './controllers/permissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Permisstion, PermisstionSchema } from './schema/permisstion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Permisstion.name, schema: PermisstionSchema }]),
  ],
  controllers: [PermisstionsController],
  providers: [PermisstionsService],
  exports: [],
})
export class PermisstionsModule {}
