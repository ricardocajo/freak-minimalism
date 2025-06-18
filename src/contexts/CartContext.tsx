"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types/product";

interface CartContextType {
  cart: Product[];
  totalItems: number;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  decrementProduct: (productId: string) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem("cart") : null;
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const addProduct = (product: Product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, product]);
    }
  };

  const removeProduct = (product: Product) => {
    setCart((prev) => prev.filter((item) => item._id !== product._id));
  };

  const decrementProduct = (productId: string) => {
    const item = cart.find((item) => item._id === productId);
    if (item && item.quantity > 1) {
      setCart((prev) =>
        prev.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (item) {
      removeProduct(item);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, totalItems, addProduct, removeProduct, decrementProduct, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
