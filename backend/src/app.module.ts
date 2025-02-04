import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsController } from './cards/cards.controller';
import { Card, CardSchema } from './cards/card.entity';
import { CardRepository } from './cards/card.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-cards'),
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardRepository],
})
export class AppModule {}
