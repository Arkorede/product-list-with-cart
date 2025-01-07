import { useState, useEffect, useMemo } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );
      // If item is already in cart, update quantity
      if (existingItem) {
        setShowMessage(true);
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1, isSelected: true }
            : cartItem
        );
        // If item is not in cart, add item with quantity of 1
      } else {
        setShowMessage(true);
        return [...prevItems, { ...item, quantity: 1, isSelected: true }];
      }
    });
  };

  // Show message for 3 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 10000000000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const increaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === itemName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const toggleSelected = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === itemName
          ? { ...cartItem, isSelected: !cartItem.isSelected }
          : cartItem
      )
    );
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== itemName)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = useMemo(() => {
    return cartItems
      .filter((cartItem) => cartItem.isSelected)
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        toggleSelected,
        removeFromCart,
        clearCart,
        totalPrice,
        showMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
