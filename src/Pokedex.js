import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
	let winnerMsg;
	if (props.isWinner) winnerMsg = <h4>Is the winner!</h4>;

	return (
		<div className="Pokedex">
			{winnerMsg}
			<p>{props.expTotal}</p>
			<div className="Pokedex-cards">
				{props.pokemon.map((p) => (
					<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
