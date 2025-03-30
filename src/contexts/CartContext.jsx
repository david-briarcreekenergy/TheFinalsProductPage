import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const checkForItemInCart = useCallback(
    (id) => cartItems.some((item) => item.product.id === id),
    [cartItems]
  );

  const updateCartItemQty = useCallback((id, qty) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product.id === id ? { ...item, qty } : item
      )
    );
  }, []);

  const cartItemCount = (id) => {
    const item = cartItems.find((item) => item.product.id === id);
    return item.qty;
  };

  const addToCart = useCallback((item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== id)
    );
  }, []);

  const clearCart = () => setCartItems([]);

  const cartSubTotal = () =>
    "$" +
    cartItems
      .reduce(
        (total, product) => total + product.product.price * product.qty,
        0
      )
      .toFixed(2);

  const totalCartItemCount = useCallback(() => {
    return cartItems.reduce((total) => total + 1, 0);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemCount,
        clearCart,
        updateCartItemQty,
        checkForItemInCart,
        setCartItems,
        totalCartItemCount,
        cartSubTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
