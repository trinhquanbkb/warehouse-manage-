import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WarehouseDocument = Warehouse & Document;

@Schema({ timestamps: true })
export class Warehouse {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Object })
  address: {
    district: string;
    wards: string;
    city: string;
    address: string;
  };
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
