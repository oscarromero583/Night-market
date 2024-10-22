import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div>
        
        <div className="header_logo">
      <StorefrontIcon fontSize='large' className='header_logoImage'/>
      <h2 className='header_logoTitle'>Night Market</h2>
      </div>

      <div className="header_searchbar">
        <input type="text" className='header_searchInput' />
        <SearchIcon />
      </div>

      <div className="header_nav">
        <div className="nav_item">
            <span className="nav_itemLineOne">Hello My Friend</span>
            <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Kiosk</span>
        </div>
        <div className="nav_item">
            <ShoppingBasketIcon />
            <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
      
        </div>
    );
}

export default Header;