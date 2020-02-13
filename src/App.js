import React, { Component } from 'react';
//import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Menu from './Menu';
import PizzaMaker from './PizzaMaker';
import Order from './Order';
import ScrollToTop from './ScrollToTop';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
						<Header />
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
