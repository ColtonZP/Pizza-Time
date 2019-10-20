import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Splash-Flex">
      <div className="Beer">
        <div>
          <p>
            Beer and Pizza? Yes please! All beers on tap and ready for you to enjoy.
          </p>
          <Link to="/beer">
            <button type="button"><span>Order Beer</span></button>
          </Link>
        </div>
      </div>
      <div className="Pizza">
        <div>
          <p>
            Wether it&#39;s for a party or its a pizza night. Our pizzas will out a smile on
            everyone&#39;s face. With all our ingredients locally sourced and organic you&#39;ll
            be sure you&#39;re making the right choice.
          </p>
          <Link to="/pizza">
            <button type="button"><span>Order Pizza</span></button>
          </Link>
        </div>
      </div>

      <div className="Cocktails">
        <div>
          <p>
            It&#39;s 5 o&#39;clock somewhere! Come on in and try our top shelf cocktails, and make it a happy hour any hour.
          </p>
          <Link to="/cocktails">
            <button type="button"><span>Order Cocktails</span></button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
