import React from "react";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    return(
        <div className="checkout">
                <div className="checkout__left">
                    <img src="https://i.postimg.cc/P5MxpD1M/etvetertve.jpg" alt="" className="checkout__ad" />
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout;