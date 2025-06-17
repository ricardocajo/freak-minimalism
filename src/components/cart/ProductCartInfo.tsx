"use client";

import { useCallback } from "react";
import { Product } from "@/app/(carts)/cart/action";
import { addItem, delOneItem } from "@/app/(carts)/cart/action";

interface ProductCartInfoProps {
  product: Product;
}

export function ProductCartInfo({ product }: ProductCartInfoProps) {
  const { price, quantity } = product;

  const handleAddItem = useCallback(() => {
    addItem(product);
  }, [product]);

  const handleDelItem = useCallback(() => {
    delOneItem(product);
  }, [product]);

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
      onClick={handleDelItem}
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
