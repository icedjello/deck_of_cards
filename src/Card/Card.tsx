import type { FC } from 'react';
import { Suit, Value } from '../Types';
import './Card.css';

type CardProps = {
	suit: Suit;
	value: Value;
};

export const Card: FC<CardProps> = ({ suit, value }) => {
	const suitAsSymbol = () => {
		switch (suit) {
			case 'Hearts':
				return '♥️';
			case 'Diamonds':
				return '♦️';
			case 'Clubs':
				return '♣️';
			case 'Spades':
				return '♠️';
		}
	};

	return (
		<div className={(suit === 'Hearts' || suit === 'Diamonds' ? 'red' : 'black') + ' card'}>
			<span className='suit-top'>{suitAsSymbol()}</span>
			<span className='value'>{value[0]}</span>
			<span className='suit-bottom'>{suitAsSymbol()}</span>
		</div>
	);
};
