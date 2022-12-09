export interface Card {
  name: string;
  description?: string;
}

export interface Deck {
  name: string;
  cards: Card[];
}
