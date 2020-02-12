import React from 'react';
import PropTypes from 'prop-types';
import budlightPic from './beer/budlight.jpg';
import shocktopPic from './beer/shocktop.jpg';
import bluemoonPic from './beer/bluemoon.jpg';
import coronaPic from './beer/corona.jpg';
import heinekenPic from './beer/heineken.jpg';
import budweiserPic from './beer/budweiser.jpg';

const beers = [
	{
		name: 'Bud Light',
		price: 5.49,
		img: budlightPic,
	},
	{
		name: 'Shocktop',
		price: 5.49,
		img: shocktopPic,
	},
	{
		name: 'Blue Moon',
		price: 5.49,
		img: bluemoonPic,
	},
	{
		name: 'Corona',
		price: 5.49,
		img: coronaPic,
	},
	{
		name: 'Heineken',
		price: 5.49,
		img: heinekenPic,
	},
	{
		name: 'Budweiser',
		price: 5.49,
		img: budweiserPic,
	},
];

function Beer(props) {
	return (
		<div className="Beer-page">
			<div className="Container">
				<ul className="Food-flex">
					{beers.map(beer => (
						<li>
							<img alt="" src={beer.img} />
							<span>{`${beer.name} - $${beer.price.toFixed(2)}`}</span>
							<button
								type="button"
								onClick={() => props.beerOrder(beer, 'beer')}
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

Beer.propTypes = {
	beerOrder: PropTypes.arrayOf.isRequired,
};

export default Beer;
