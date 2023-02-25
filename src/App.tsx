import './App.css';
import { useState } from 'react';
import { shuffle } from 'lodash';
import { MakeDeck } from './CardOperations/MakeDeck';
import { Card } from './Card/Card';

// const sortDeck = (deck: Deck): Deck => deck.sort((a, b) => a.number - b.number);

function App() {
	const [deck] = useState(shuffle(MakeDeck()));

	return (
		<div className='App'>
			<div className='card-grid'>
				{deck.map(card => (
					<Card suit={card.suit} value={card.value} />
				))}
			</div>
		</div>
	);
}

export default App;
