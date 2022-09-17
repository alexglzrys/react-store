import { useState } from "react";

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    // Conservar el estado actual, los productos actuales agregados al carrito, y añadir el nuevo producto
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  // Eliminar un producto del carrito de la compra
  const deleteFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload),
    });
  };

  // Obtener el total de la compra
  const getTotal = state.cart.reduce(
    (acumulador, product) => acumulador + Number(product.price),
    0
  );

  // Exponer la interfaz pública del custom hook
  return {
    state,
    addToCart,
    deleteFromCart,
    getTotal,
  };
};
