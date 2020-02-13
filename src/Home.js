import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="Home">
			<div className="Container">
				<h1>Hungry Much?</h1>
				<p>
					Wether it’s for a party or a pizza night, our pizzas will put a smile
					on everyone’s face. With all our ingredients locally sourced and
					organic, you’ll be sure you’re making the right choice.
				</p>
				<Link to="/menu">
					<button type="button">
						<span>See our menu</span>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
