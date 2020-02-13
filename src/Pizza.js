import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pepperoniPic from './pizza/pepperoni.jpg';
import cheesePic from './pizza/cheese.jpg';
import meatPic from './pizza/meat_lovers.jpg';
import supremePic from './pizza/supreme.jpg';
import veggiePic from './pizza/veggie.jpg';
import hawaiianPic from './pizza/hawaiian.jpg';
import bbqPic from './pizza/bbqchicken.jpg';
import buffaloPic from './pizza/buffalochicken.jpg';
import customPic from './pizza/custom.png';

const pizzas = [
	{
		name: 'Pepperoni',
		price: 12,
		toppings: [''],
		img: pepperoniPic,
	},
	{
		name: 'Cheese',
		price: 12,
		toppings: [''],
		img: cheesePic,
	},
	{
		name: 'Meat Lovers',
		price: 13.5,
		toppings: ['pepperoni', 'bacon', 'ham', 'sausage'],
		img: meatPic,
	},
	{
		name: 'Supreme',
		price: 14,
		toppings: ['pepperoni', 'green pepper', 'olives', 'onion'],
		img: supremePic,
	},
	{
		name: 'Veggie',
		price: 14,
		toppings: ['onion', 'mushroom', 'olives', 'green pepper'],
		img: veggiePic,
	},
	{
		name: 'Hawaiian',
		price: 13,
		toppings: ['ham', 'pineapple'],
		img: hawaiianPic,
	},
	{
		name: 'BBQ Chicken',
		price: 13,
		toppings: ['chicken', 'onion', 'BBQ Sauce'],
		img: bbqPic,
	},
	{
		name: 'Buffalo Chicken',
		price: 13,
		toppings: ['Chicken', 'Buffalo Sauce'],
		img: buffaloPic,
	},
];

function Pizza(props) {
	return (
		<div className="Pizza-page">
			<div className="Container">
				<ul className="Food-flex">
					<li>
						<img alt="" src={customPic} />
						<span>Create your own</span>
						<Link to="/pizza/maker">
							<button type="button">
								<span>Pizza Maker</span>
							</button>
						</Link>
					</li>
					{pizzas.map(pizza => (
						<li>
							<img alt="" src={pizza.img} />
							<span>{`${pizza.name} - $${pizza.price.toFixed(2)}`}</span>
							<button
								type="button"
								onClick={() => props.pizzaOrder(pizza, 'pizza')}
							>
								Add to order
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

Pizza.propTypes = {
	pizzaOrder: PropTypes.arrayOf.isRequired,
};

export default Pizza;
