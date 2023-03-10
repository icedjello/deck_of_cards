import type { Deck, Suit, Value } from './Types';

export const MakeDeck = () => {
	const values: Value[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	const suits: Suit[] = ['♥️', '♦️', '♣️', '♠️'];
	let num = 0;
	const deck: Deck = [];
	suits.forEach(suit => {
		values.forEach(value => {
			deck.push({ number: ++num, suit, value });
		});
	});
	return deck;
};
