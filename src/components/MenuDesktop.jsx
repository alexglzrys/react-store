import React from "react";
import "../styles/MenuDesktop.scss";

export const MenuDesktop = () => {
  return (
    <div className="MenuDesktop">
      <ul>
        <li>
          <a href="/" class="title">
            My orders
          </a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};
