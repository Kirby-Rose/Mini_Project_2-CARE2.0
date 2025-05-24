import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const copyOfCurrentCart = [...cartItems];
    const productMatch = copyOfCurrentCart.find(
      (currentProduct) => currentProduct.id === product.id
    );
    if (!productMatch) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    if (productMatch) {
      setCartItems(
        copyOfCurrentCart.map((currentProduct) => {
          if (productMatch && productMatch.id === currentProduct.id) {
            const currentQty = currentProduct.quantity;
            console.log("product match", currentQty);
            return {
              ...currentProduct,
              quantity: currentQty + 1,
            };
          } else {
            return currentProduct;
          }
        })
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
