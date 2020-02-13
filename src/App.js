import React, { Component } from 'react';
//import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import PizzaMaker from './PizzaMaker';
import Order from './Order';
import ScrollToTop from './ScrollToTop';
import logo from './logo-white.svg';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuShow: false,
			pizzaOrder: [],
			beerOrder: [],
			cocktailOrder: [],
			orderTotal: 0,
		};
	}

	toggle = () => {
		this.setState(prevState => ({ menuShow: !prevState.menuShow }));
	};

	addToOrder = (item, type) => {
		if (type === 'pizza') {
			this.setState(prevState => ({
				pizzaOrder: [...prevState.pizzaOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		} else if (type === 'beer') {
			this.setState(prevState => ({
				beerOrder: [...prevState.beerOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		} else if (type === 'cocktail') {
			this.setState(prevState => ({
				cocktailOrder: [...prevState.cocktailOrder, item],
				orderTotal: prevState.orderTotal + item.price,
			}));
		}
	};

	clearOrder = () => {
		this.setState({
			menuShow: false,
			pizzaOrder: [],
			beerOrder: [],
			cocktailOrder: [],
			orderTotal: 0,
		});
	};

	render() {
		const { menuShow } = this.state;
		return (
			<div className="App">
				<Router onUpdate={() => window.scrollTo(0, 0)}>
					<ScrollToTop>
						<header className="App-header">
							<div className="Container">
								<nav className={menuShow ? 'Nav' : 'Nav-hiding'}>
									<Link to="/">
										<img className="Logo" alt="Link to home" src={logo} />
									</Link>
									{/* <button
										type="button"
										className={menuShow ? 'Menu Close' : 'Menu'}
										onClick={this.toggle}
									>
										<div className="Top Bar" />
										<div className="Middle Bar" />
										<div className="Middle2 Bar" />
										<div className="Bottom Bar" />
									</button> */}
									<ul>
										<li>
											<Link to="/" onClick={menuShow && this.toggle}>
												Home
											</Link>
										</li>
										<li>
											<Link to="/menu" onClick={menuShow && this.toggle}>
												Menu
											</Link>
										</li>
										<li>
											<Link to="/order" onClick={menuShow && this.toggle}>
												Order
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</header>

						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/menu"
								component={() => (
									<Menu
										pizzaOrder={this.addToOrder}
										beerOrder={this.addToOrder}
										cocktailOrder={this.addToOrder}
									/>
								)}
							/>
							<Route
								exact
								path="/pizza/maker"
								component={() => <PizzaMaker pizzaOrder={this.addToOrder} />}
							/>
							<Route
								exact
								path="/order"
								component={() => (
									<Order order={this.state} finishOrder={this.clearOrder} />
								)}
							/>
						</Switch>
					</ScrollToTop>
				</Router>
			</div>
		);
	}
}

export default App;
