import React from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';

function Order(props) {
  const { order } = props;
  const { finishOrder } = props;
  return (
    <div className="Order-page">
      <div className="Container">
        <div className="Receipt">
          <h1>Order:</h1>
          {order.pizzaOrder.length >= 1 && <h2>Pizza</h2>}
          <ul>
            {order.pizzaOrder.map(item => (
              <li>
                <span className="Title">{item.name} Pizza</span>
                <span>${item.price.toFixed(2)}</span>
                <ul>
                  <li>
                    <ul>
                      {item.toppings && item.toppings.map(topping => (
                        <li>{topping}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          {order.beerOrder.length >= 1 && <h2>Beer</h2>}
          <ul>
            {order.beerOrder.map(item => (
              <li>
                <span className="Title">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          {order.cocktailOrder.length >= 1 && <h2>Cocktail</h2>}
          <ul>
            {order.cocktailOrder.map(item => (
              <li>
                <span className="Title">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Checkout total={order.orderTotal} finishOrder={finishOrder} />
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.arrayOf.isRequired,
  finishOrder: PropTypes.func.isRequired,
};

export default Order;
