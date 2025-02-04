export interface CardType {
  _id: string;
  title: string;
  description: string;
  startDate: string;
}

export type DeleteCardDTO = Partial<CardType>;
