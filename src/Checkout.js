import React, { Component } from 'react';
import Card from './Card';

export default class Checkout extends Component {
  state = {
    showingPayment: false,
  }

  togglePayment = () => {
    this.setState({ showingPayment: !this.state.showingPayment });
  }

  render() {
    return (
      <div className="Checkout-main">
        <div className="Checkout">
          <span>Sub total: ${(this.props.total).toFixed(2)}</span>
          <span>Tax: ${(this.props.total * 0.101).toFixed(2)}</span>
          <span>Total: ${(this.props.total + (this.props.total * 0.101)).toFixed(2)}</span>
          {this.props.total <= 0
            ? <span className="Order-message">You must add items to the order before checking out</span>
            : <button onClick={this.togglePayment}><span>Order</span></button>}
        </div>
        {this.state.showingPayment && <Card toggle={this.togglePayment} finishOrder={this.props.finishOrder} />}
      </div>
    );
  }
}
