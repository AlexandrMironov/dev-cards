import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './card.entity';

@Injectable()
export class CardRepository {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async create(card: Card): Promise<Card> {
    const newCard = new this.cardModel(card);
    return newCard.save();
  }

  async deleteById(id: string): Promise<Card | null> {
    return this.cardModel.findByIdAndDelete(id);
  }
}
