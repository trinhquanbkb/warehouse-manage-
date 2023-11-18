// roles.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema({
  timestamps: true
})
export class Role {

  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: [String],
  })
  permissionIds: string[]; // Thay thế kiểu dữ liệu theo kiểu bạn sử dụng cho ID của quyền
}

export const RoleSchema = SchemaFactory.createForClass(Role);
