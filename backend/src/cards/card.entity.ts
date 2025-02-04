import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Card extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  startDate: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
