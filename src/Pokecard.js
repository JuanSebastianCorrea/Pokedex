import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	let imgSrc = `${POKE_API}${props.id}.png`;
	return (
		<div className="Pokecard">
			<h3 className="Pokecard-name">{props.name}</h3>
			<img src={imgSrc} className="Pokecard-img" alt="" />
			<p>Type: {props.type}</p>
			<p>EXP: {props.base_experience}</p>
		</div>
	);
};

export default Pokecard;
