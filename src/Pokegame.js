import Pokedex from './Pokedex';

const Pokegame = (props) => {
	let hand1 = [];
	let hand2 = [ ...props.pokemon ];

	while (hand1.length < hand2.length) {
		let randIdx = Math.floor(Math.random() * hand2.length);
		let randPokemon = hand2.splice(randIdx, 1)[0];
		hand1.push(randPokemon);
	}

	let hand1Total = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
	let hand2Total = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
	console.log(hand1);
	console.log(hand2);
	console.log(hand1Total);
	console.log(hand2Total);

	return (
		<div className="Pokegame">
			<h1 className="Pokegame-header">Pokedex</h1>
			<div>
				<h3>Player 1</h3>
				<Pokedex pokemon={hand1} expTotal={hand1Total} isWinner={hand1Total > hand2Total} />
			</div>
			<div>
				<h3>Player 2</h3>
				<Pokedex pokemon={hand2} expTotal={hand2Total} isWinner={hand2Total > hand1Total} />
			</div>
		</div>
	);
};

Pokegame.defaultProps = {
	pokemon: [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
	]
};

export default Pokegame;
