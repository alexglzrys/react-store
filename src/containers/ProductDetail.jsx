import React from "react";
import { ProductInfo } from "../components/ProductInfo";
import "../styles/ProductDetail.scss";
import IconClose from "../assets/icons/icon_close.png";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={IconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
