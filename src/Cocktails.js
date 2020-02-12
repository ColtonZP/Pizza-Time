import React from 'react';
import PropTypes from 'prop-types';
import oldfashionedPic from './cocktail/oldfashioned.jpg';
import whiskeysourPic from './cocktail/whiskeysour.jpg';
import manhattanPic from './cocktail/manhattan.jpg';
import margaritaPic from './cocktail/margarita.jpg';
import martiniPic from './cocktail/martini.jpg';
import whiterussianPic from './cocktail/whiterussian.jpg';
import longislandPic from './cocktail/longisland.jpg';
import cosmopolitanPic from './cocktail/cosmopolitan.jpg';
import aviationPic from './cocktail/aviation.jpg';
import pinacoladaPic from './cocktail/pinacolada.jpg';
import maitaiPic from './cocktail/maitai.jpg';

const cocktails = [
	{
		name: 'Old Fashioned',
		price: 7.49,
		img: oldfashionedPic,
	},
	{
		name: 'Whiskey Sour',
		price: 7.49,
		img: whiskeysourPic,
	},
	{
		name: 'Manhattan',
		price: 7.49,
		img: manhattanPic,
	},
	{
		name: 'Margarita',
		price: 7.49,
		img: margaritaPic,
	},
	{
		name: 'Martini',
		price: 7.49,
		img: martiniPic,
	},
	{
		name: 'White Russian',
		price: 7.49,
		img: whiterussianPic,
	},
	{
		name: 'Long Island Iced Tea',
		price: 7.49,
		img: longislandPic,
	},
	{
		name: 'Cosmopolitan',
		price: 7.49,
		img: cosmopolitanPic,
	},
	{
		name: 'Aviation',
		price: 7.49,
		img: aviationPic,
	},
	{
		name: 'Piña Colada',
		price: 7.49,
		img: pinacoladaPic,
	},
	{
		name: 'Mai Tai',
		price: 7.49,
		img: maitaiPic,
	},
];

function Cocktails(props) {
	return (
		<div className="Cocktail-page">
			<div className="Container">
				<ul className="Food-flex">
					{cocktails.map(cocktail => (
						<li>
							<img alt="" src={cocktail.img} />
							<span>{`${cocktail.name} - $${cocktail.price.toFixed(2)}`}</span>
							<button
								type="button"
								onClick={() => props.cocktailOrder(cocktail, 'cocktail')}
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

Cocktails.propTypes = {
	cocktailOrder: PropTypes.arrayOf.isRequired,
};

export default Cocktails;
