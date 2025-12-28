import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  mobile: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: false })
  softdelete: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
