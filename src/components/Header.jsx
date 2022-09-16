import React, { useState } from "react";
import "../styles/Header.scss";
import { Menu } from "./Menu";
import IconMenu from "../assets/icons/icon_menu.svg";
import ShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Logotipo from "../assets/logos/logo_yard_sale.svg";
import { MenuDesktop } from "./MenuDesktop";

export const Header = () => {
  // Declarar el estado del menú - abierto | cerrado
  const [toggleMenuDesktop, setToggleMenuDesktop] = useState(false);
  const handleToggleMenuDesktop = () => {
    setToggleMenuDesktop(!toggleMenuDesktop);
  };

  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logotipo} alt="logo" className="logo" />
        <Menu />
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenuDesktop}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={ShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {/* Si toggleMenuDesktop es verdadero, mostrar el componente */}
      {toggleMenuDesktop && <MenuDesktop />}
    </nav>
  );
};
