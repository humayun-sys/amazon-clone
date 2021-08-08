import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineone">hello guest</span>
          <span className="header_optionLinetwo">sign in </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">returns</span>
          <span className="header_optionLinetwo">&orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">your</span>
          <span className="header_optionLinetwo">prime </span>
        </div>
        <div className="header_optionCart">
          <ShoppingCartIcon />
          <span className="header_optionLinetwo header_shopingCart">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
