import './App.css';
import { useState } from 'react';
import { shuffle, sortBy, random } from 'lodash';
import { MakeDeck } from './MakeDeck';
import { Card } from './Card/Card';
import type { SingleCard } from './Types';

function App() {
	const [deck, setDeck] = useState(MakeDeck());
	const [drawnCard, setDrawnCard] = useState<SingleCard>();

	const onShuffle = () => setDeck(shuffle(deck));
	const onSort = () => setDeck(sortBy(deck, ['number']));
	const drawACard = () => {
		const chosenCard = deck[random(0, deck.length - 1)];
		const remainingCards = deck.filter(({ number }) => number !== chosenCard.number);
		setDrawnCard(chosenCard);
		setDeck(remainingCards);
	};

	return (
		<div className='App'>
			<p>Actions</p>
			<span className='buttons'>
				<button onClick={onShuffle}>Shuffle</button>
				<button onClick={onSort}>Sort</button>
				<button onClick={drawACard}>Draw a card</button>
			</span>
			<p>Drawn Cards</p>
			<div className='card-grid'>{drawnCard && <Card suit={drawnCard.suit} value={drawnCard.value} />}</div>
			<p>Deck</p>
			<div className='card-grid'>
				{deck.map(({ number, suit, value }) => (
					<Card key={`card-${number}`} suit={suit} value={value} />
				))}
			</div>
		</div>
	);
}

export default App;
