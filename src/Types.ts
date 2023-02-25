export type Suit = '♥️' | '♦️' | '♣️' | '♠️';

export type Value = 'Ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King';

export type SingleCard = {
	number: number;
	value: Value;
	suit: Suit;
};

export type Deck = SingleCard[];
