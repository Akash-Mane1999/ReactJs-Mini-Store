import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // SIDE EFFECT
  useEffect(() => {
    document.title = `Cart (${cart.length})`;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
