import {  Module } from '@nestjs/common';
import { WarehousesService } from './services/warehouses.service';
import { WarehousesController } from './controllers/warehouses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Warehouse, WarehouseSchema } from './schema/warehouse.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Warehouse.name, schema: WarehouseSchema }]),
  ],
  controllers: [WarehousesController],
  providers: [WarehousesService],
  exports: [],
})
export class WarehousesModule {}
