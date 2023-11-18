// roles.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PermisstionDocument = Permisstion & Document;

@Schema({
  timestamps: true
})
export class Permisstion {

  @Prop({
    required: true,
    type: String,
  })
  name: string;
}

export const PermisstionSchema = SchemaFactory.createForClass(Permisstion);
