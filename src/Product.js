import React from "react";
import './Product.css'

function Product() {
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>19th century device for peeling shells off of hard-boiled eggs</p>
                    <p className="product__price">$30</p>
                    <div className="product__rating">⭐⭐</div>
                </div>

                <img src="https://i.imgur.com/hptvjBa.jpeg" alt="Product-image" />
                <button>Addd to basket</button>
            </div>
        </div>
    );
}

export default Product;