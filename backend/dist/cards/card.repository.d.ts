import { Model } from 'mongoose';
import { Card } from './card.entity';
export declare class CardRepository {
    private cardModel;
    constructor(cardModel: Model<Card>);
    findAll(): Promise<Card[]>;
    create(card: Card): Promise<Card>;
    deleteById(id: string): Promise<Card | null>;
}
