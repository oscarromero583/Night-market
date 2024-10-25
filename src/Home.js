import React from 'react';
import './Home.css';
import Product from './Product'


function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://i.imgur.com/VrdzNvq.jpeg" alt="" className="home__image" />


                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home