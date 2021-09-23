import { useState } from "react";

import logo from "../images/logo.png";
import Cart from "../components/Cart";
import { cartItems } from "../data/data";

const Header = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const searchFormHandle = () => {
    setShowSearchForm(!showSearchForm);
  };
  return (
    <header className="header">
      <a href="#home" className="header__logo">
        <img src={logo} alt="coffee-shop-logo" />
      </a>

      <nav className="header__navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className="header__icons">
        <div
          className="fas fa-search"
          id="search-btn"
          onClick={searchFormHandle}
        />
        <div className="fas fa-shopping-cart" id="cart-btn" />
        <div className="fas fa-bars" id="menu-btn" />
      </div>
      <div className={`header__search-form header__search-form${showSearchForm ? "--active" : ""}`}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search" />
      </div>
      <Cart items={cartItems} />
    </header>
  );
};

export default Header;
