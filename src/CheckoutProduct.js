import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />

        <div className="CheckoutProduct__info">
          <p className="checkoutProduct__title">{title} </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((star, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <button>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
