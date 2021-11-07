import React from "react";
import "./Header.css";
import logo from "./img/logo.png";
import { SearchRounded, ShoppingCart } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="logo"></img>

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchRounded className="searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne"> Hello Guest</span>
          <span className="header_optionLineTwo"> Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Try</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingCart />
          <span className="header_optionLineTwo header_optionBasketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
