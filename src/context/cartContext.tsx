import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../models/types";

type CartContextType = {
  cart: CartItem[];
  setCart: (status: CartItem[]) => void;
  warning: boolean;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  handleClick: (item: CartItem) => void;
  finished: boolean;
  setFinished: (status: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("carts") || "[]")
  );
  const [warning, setWarning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cart));
  }, [cart]);

  const increment = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id: number) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        return prev;
      } else if (prev[itemIndex].quantity === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  const handleClick = (item: CartItem) => {
    const isAdded = cart.some((product) => product.id === item.id);
    if (isAdded) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    addToCart(item);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        warning,
        increment,
        decrement,
        handleClick,
        finished,
        setFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
