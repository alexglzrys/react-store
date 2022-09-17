import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import { Menu } from "./Menu";
import IconMenu from "../assets/icons/icon_menu.svg";
import ShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import Logotipo from "../assets/logos/logo_yard_sale.svg";
import { MenuDesktop } from "./MenuDesktop";
import { AppContext } from "../context/AppContext";
import { MyOrder } from "../containers/MyOrder";

export const Header = () => {
  // Declarar el estado del menú - abierto | cerrado
  const [toggleMenuDesktop, setToggleMenuDesktop] = useState(false);
  // Declarar el estado del sidebar - ordenes de compra
  const [toggleSidebarOrder, setToggleSidebarOrder] = useState(false);

  // Conectar el componente a AppContext
  const { state } = useContext(AppContext);

  const handleToggleMenuDesktop = () => {
    setToggleMenuDesktop(!toggleMenuDesktop);
  };

  const handleToggleSidebarOrder = () => {
    setToggleSidebarOrder(!toggleSidebarOrder);
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
          <li
            className="navbar-shopping-cart"
            onClick={handleToggleSidebarOrder}
          >
            <img src={ShoppingCart} alt="shopping cart" />
            {/* Mostrar la cantidad de productos agregados al carrito de la compra */}
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {/* Si toggleMenuDesktop es verdadero, mostrar el componente */}
      {toggleMenuDesktop && <MenuDesktop />}
      {toggleSidebarOrder && <MyOrder />}
    </nav>
  );
};
