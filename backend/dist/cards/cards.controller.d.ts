import { Card } from './card.entity';
import { CardRepository } from './card.repository';
export declare class CardsController {
    private readonly cardRepository;
    constructor(cardRepository: CardRepository);
    getAll(): Promise<Card[]>;
    create(card: Card): Promise<Card>;
    delete(id: string): Promise<Card | null>;
}
