import React from "react";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

export const ProductList = () => {
  return (
    <section className="ProductList">
      <div className="cards-container">
        <ProductItem />
      </div>
    </section>
  );
};
