import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Search, ShoppingBasket, Close, Dehaze, } from "@material-ui/icons";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

const [{ basket, user }] = useStateValue();

const [ isMobile, setIsMobile ] = useState(false);

const login = () => {
  if (user) {
    auth.signOut();
  }
};



  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="images/logo.png" alt="" />
      </Link>

        <button className="mobile-menu-icon" 
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
        <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
        </button>





      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className={isMobile ? "header__nav__mobile" : "header__nav"} onClick={() => setIsMobile(false)}>
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Others</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Wish List</span>
          </div>
        </Link>

        
      </div>
        <Link to="checkout" className="header__checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCounter">{ basket?.length }</span>
          </div>
        </Link>
    </nav>
  );
}

export default Header;
