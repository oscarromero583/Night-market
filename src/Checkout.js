import React from "react";
import './Checkout'
import ChechoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    return(
        <div className="chechout">
                <div className="checkout__left">
                    <img src="https://i.postimg.cc/P5MxpD1M/etvetertve.jpg" alt="" className="checkout__ad" />
                    <h2 className="chechout__title">Your Shopping Basket</h2>
                    <ChechoutProduct />
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout;