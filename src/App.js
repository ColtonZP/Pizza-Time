import React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';
import Beer from './Beer';
import Cocktails from './Cocktails';
import PizzaMaker from './PizzaMaker';
import Order from './Order';
import ScrollToTop from './ScrollToTop';
import logo from './logo-white.svg';
import pizzaSvg from './pizza.svg';
import beerSvg from './beer.svg';
import cocktailsSvg from './cocktails.svg';
import orderSvg from './order.svg';

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
  }

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
  }

  clearOrder = () => {
    this.setState({
      menuShow: false,
      pizzaOrder: [],
      beerOrder: [],
      cocktailOrder: [],
      orderTotal: 0,
    });
  }

  render() {
    const { menuShow } = this.state;
    return (
      <div className="App">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollToTop>
            <header className="App-header">
              <Link to="/">
                <div className="Logo">
                  <img alt="" src={logo} />
                </div>
              </Link>
              <nav className={menuShow ? 'Nav' : 'Nav-hiding'}>

                <button type="button" className={menuShow ? 'Menu Close' : 'Menu'} onClick={this.toggle}>
                  <div className="Top Bar" />
                  <div className="Middle Bar" />
                  <div className="Middle2 Bar" />
                  <div className="Bottom Bar" />
                </button>
                <ul>
                  <li><Link to="/" onClick={menuShow && this.toggle}>Home</Link></li>
                  <li><Link to="/pizza" onClick={menuShow && this.toggle}>Pizza<img alt="" src={pizzaSvg} /></Link></li>
                  <li><Link to="/beer" onClick={menuShow && this.toggle}>Beer <img alt="" src={beerSvg} /></Link></li>
                  <li><Link to="/cocktails" onClick={menuShow && this.toggle}>Cocktails <img alt="" src={cocktailsSvg} /></Link></li>
                  <li><Link to="/order" onClick={menuShow && this.toggle}>View Order <img alt="" src={orderSvg} /></Link></li>
                </ul>
              </nav>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pizza" component={() => <Pizza pizzaOrder={this.addToOrder} />} />
              <Route exact path="/pizza/maker" component={() => <PizzaMaker pizzaOrder={this.addToOrder} />} />
              <Route exact path="/beer" component={() => <Beer beerOrder={this.addToOrder} />} />
              <Route exact path="/cocktails" component={() => <Cocktails cocktailOrder={this.addToOrder} />} />
              <Route exact path="/order" component={() => <Order order={this.state} finishOrder={this.clearOrder} />} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
