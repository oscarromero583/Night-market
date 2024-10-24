import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">

            {/* Logo Section */}
            <div className="header__logo">
                <StorefrontIcon fontSize='large' className='header__logoImage' />
                <h2 className='header__logoTitle'>Night Market</h2>
            </div>

            {/* Search Bar */}
            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Navigation Section */}
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello My Friend</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Kiosk</span>
                </div>
                <div className="nav__itemBasket">
                    <ShoppingBasketIcon />
                    <span className="nav__basketCount">0</span>
                </div>
            </div>

        </div>
    );
}

export default Header;
