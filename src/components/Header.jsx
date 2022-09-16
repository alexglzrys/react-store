import React from "react";
import "../styles/Header.scss";
import { Menu } from "./Menu";
import IconMenu from "../assets/icons/icon_menu.svg";
import ShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Logotipo from "../assets/logos/logo_yard_sale.svg";

export const Header = () => {
  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logotipo} alt="logo" className="logo" />
        <Menu />
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={ShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
