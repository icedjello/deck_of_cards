export type Suit = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';

export type Value = 'Ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King';

export type CardType = {
	number: number;
	value: Value;
	suit: Suit;
};

export type Deck = CardType[];
