import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    // localStorage.getItem("cart") ?? []
    []
  );

  const addToCart = (item) => setCartItems([...cartItems, item]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.product.id != id));
  };

  const updateCartItemQty = (id, qty) => {
    setCartItems(
      cartItems.map(
        (item) =>
          item.product.id === id
            ? { ...item, qty: qty } // Update the quantity
            : item // Unchange the rest
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQty,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
