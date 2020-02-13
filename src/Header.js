import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo-white.svg';

function Header() {

	const [menu, toggleMenu] = useState(false);

	const toggle = () => {
		toggleMenu(!menu);
	};

	return (
		<header className="App-header">
			<div className="Container">
				<nav className={menu ? 'Nav' : 'Nav-hiding'}>
					<Link to="/">
						<img className="Logo" alt="Link to home" src={logo} />
					</Link>
					{/* <button
										type="button"
										className={menu ? 'Menu Close' : 'Menu'}
										onClick={this.toggle}
									>
										<div className="Top Bar" />
										<div className="Middle Bar" />
										<div className="Middle2 Bar" />
										<div className="Bottom Bar" />
									</button> */}
					<ul>
						<li>
							<Link to="/" onClick={menu && toggle}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/menu" onClick={menu && toggle}>
								Menu
							</Link>
						</li>
						<li>
							<Link to="/order" onClick={menu && toggle}>
								Order
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
