import React from "react";
import "../styles/Menu.scss";

export const Menu = () => {
  return (
    <ul className="Menu">
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <a href="/">Clothes</a>
      </li>
      <li>
        <a href="/">Electronics</a>
      </li>
      <li>
        <a href="/">Furnitures</a>
      </li>
      <li>
        <a href="/">Toys</a>
      </li>
      <li>
        <a href="/">Others</a>
      </li>
    </ul>
  );
};
