import React from "react";
import UserProfileIcon from "../../../assests/Homepage/Navbar/user.png";
import WishListIcon from "../../../assests/Homepage/Navbar/heart.png";
import CartIcon from "../../../assests/Homepage/Navbar/shopping-cart.png";
import IndianFlag from "../../../assests/Homepage/Navbar/india.png";
import ShoeNicksLogo from "../../../assests/Homepage/Navbar/shoenicks-logo.png";
import SearchbarIcon from "../../../assests/Homepage/Navbar/loupe(1).png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-details-wrapper">
        <div className="profile-icon-wrapper">
          <img src={UserProfileIcon} alt="profile-image" />
          <img src={IndianFlag} alt="country-image" />
        </div>

        <div className="logo-wrapper">
          {/* <img src={ShoeNicksLogo} alt="logo" style={{height: '110px', width: '100%' }}/> */}
          <h1>ShoeNicks</h1>
        </div>

        <div className="search-details-wrapper">
          {/* Search bar */}
          <div className="search-bar-wrapper">
            <img className="search-icon" src={SearchbarIcon} style={{width:'20px' , height:'20px'}} />
            <input
              id="search-input"
              type="text"
              placeholder="Enter shoe name"
            />
          </div>

          <div className="cart-icon-wrapper">
            <img src={WishListIcon} alt="wishlist-icon" />
            <img src={CartIcon} alt="cart-icon" />
          </div>
        </div>
      </div>
      {/* <div className="navbar-category-wrapper">
        <div className="categories">
          <h1>Hello</h1>
        </div>
        <div className="categories">
          <h1>Hello</h1>
        </div>
        <div className="categories">
          <h1>Hello</h1>
        </div>
        <div className="categories">
          <h1>Hello</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
