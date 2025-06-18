"use client";

import { useCallback } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

interface ProductCartInfoProps {
  product: Product;
}

export default function ProductCartInfo({ product }: ProductCartInfoProps) {
  const { price, quantity } = product;
  const { addToCart, decrementQuantity } = useCart();

  const handleAddItem = useCallback(() => {
    addToCart(product);
  }, [product]);

  const handleDelOneItem = useCallback(() => {
    decrementQuantity(product._id);
  }, [product._id]);

  const IncrementButton = () => (
    <button
      className="flex items-center justify-center w-8 h-8 p-2 border border-solid rounded-r text-[#A1A1A1] transition-all hover:text-white border-border-primary"
      onClick={handleAddItem}
    >
      +
    </button>
  );

  const DecrementButton = () => (
    <button
      className="flex items-center justify-center w-8 h-8 p-2 border border-solid rounded-l text-[#A1A1A1] transition-all hover:text-white border-border-primary"
      onClick={handleDelOneItem}
    >
      -
    </button>
  );

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{price}€</span>
      <div className="flex bg-black w-min">
        <DecrementButton />
        <span className="flex items-center justify-center w-8 h-8">{quantity}</span>
        <IncrementButton />
      </div>
    </div>
  );
}
