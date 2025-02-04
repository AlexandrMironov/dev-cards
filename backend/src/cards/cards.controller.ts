import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { Card } from './card.entity';
import { CardRepository } from './card.repository';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardRepository: CardRepository) {}

  @Get('all')
  async getAll(): Promise<Card[]> {
    return this.cardRepository.findAll();
  }

  @Post('create')
  async create(@Body() card: Card): Promise<Card> {
    return this.cardRepository.create(card);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Card | null> {
    return this.cardRepository.deleteById(id);
  }
}
