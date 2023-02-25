import type { FC } from 'react';
import { Suit, Value } from '../Types';
import './Card.css';

type CardProps = {
	suit: Suit;
	value: Value;
};

export const Card: FC<CardProps> = ({ suit, value }) => {
	return (
		<div className={(suit === '♥️' || suit === '♦️' ? 'red' : 'black') + ' card'}>
			<span className='suit-top'>{suit}</span>
			<span className='value'>{value[0]}</span>
			<span className='suit-bottom'>{suit}</span>
		</div>
	);
};
