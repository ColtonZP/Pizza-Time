import React from 'react';
import Pizza from './Pizza';
import Beer from './Beer';
import Cocktails from './Cocktails';

function Menu(props) {
	return (
		<div className="Menu-page Container">
			<h2>Pizza</h2>
			<Pizza pizzaOrder={props.pizzaOrder} />
			<h2>Beer</h2>
			<Beer beerOrder={props.beerOrder} />
			<h2>Cocktail</h2>
			<Cocktails cocktailOrder={props.cocktailOrder} />
		</div>
	);
}

export default Menu;
