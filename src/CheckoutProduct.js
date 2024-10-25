import React from "react";
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src="https://i.imgur.com/hptvjBa.jpeg"
          alt=""
          className="checkoutProduct__image"
        />

        <div className="product__info">
          <p className="checkoutProduct__title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            itaque veniam quas!
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>20</strong>
          </p>
          <div className="checkoutProduct__rating">⭐⭐</div>
          <button>Romve from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
