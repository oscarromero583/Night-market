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
                    <Product 
                            id='0000001'
                            title='19th century device for peeling shells off of hard-boiled eggs'
                            price={12.34}
                            rating={3}
                            image='https://i.imgur.com/hptvjBa.jpeg'
                    />
                    <Product 
                            id='0000002'
                            title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                            price={456.34}
                            rating={4}
                            image='https://i.postimg.cc/D00ZPGZV/dfg-d.jpg'
                    />
                    <Product 
                             id='0000003'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={34.23}
                             rating={2}
                             image='https://i.postimg.cc/J0srkW6M/dg-gb-fg.jpg'
                    />
                </div>
                <div className="home__row">
                    <Product 
                             id='0000004'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={56.3}
                             rating={4}
                             image='https://i.postimg.cc/1t944213/fgdgd.jpg'
                    />
                    <Product 
                             id='0000005'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={45.32}
                             rating={3}
                             image='https://i.postimg.cc/SNwscJb5/hfb-d-s-ss.jpg'
                    />
                </div>
                <div className="home__row">
                    <Product 
                             id='0000006'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={89.4}
                             rating={3}
                             image='https://i.postimg.cc/hjy4vG02/df-f-fh-f.jpg'
                    />
                    <Product 
                             id='0000007'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={45.8}
                             rating={4}
                             image='https://i.postimg.cc/fb7JzZFP/dgdv-d.jpg'
                    />
                    <Product 
                             id='0000008'
                             title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet inventore blanditiis dicta tempore dolorem nostrum ratione nesciunt,'
                             price={67.8}
                             rating={4}
                             image='https://i.postimg.cc/RV3h3wyK/sfd-sfd.jpg'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home