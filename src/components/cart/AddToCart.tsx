"use client";

import React from "react";
import { useTransition, useCallback } from "react";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/contexts/CartContext";
import { Product } from "@/types/types";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface AddToCartProps {
  product: Product;
  selectedColor: string;
  selectedSize: string | null;
}

export const AddToCart = ({
  product,
  selectedColor,
  selectedSize,
}: AddToCartProps) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = useCallback(() => {
    if (!selectedSize) {
      toast.error("You have to select a size to save the product");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0],
      quantity: 1,
    };

    startTransition(() => {
      addToCart(cartItem);
      toast.success("Added to cart");
    });
  }, [product, selectedColor, selectedSize, addToCart]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">{t('productDetails.color')}: {selectedColor}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 transition-colors"
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
