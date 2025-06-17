"use client";

import { useState, useTransition, useCallback } from "react";
import { toast } from "sonner";
import { addItem } from "@/app/(carts)/cart/action";



interface AddToCartProps {
  product: {
    _id: string;
    category: string;
    name: string;
    price: number;
    image: string[];
    sizes: string[];
    variants: Array<{
      priceId: string;
      color: string;
      images: string[];
    }>;
  };
  selectedVariant: {
    priceId: string;
    color: string;
    images: string[];
  } | undefined;
  setSelectedVariant: (variant: {
    priceId: string;
    color: string;
    images: string[];
  }) => void;
}

export default function AddToCart({
  product,
  selectedVariant,
  setSelectedVariant,
}: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = useCallback(() => {
    if (!selectedVariant?.priceId) {
      toast.info("You have to select a color to save the product.");
      return;
    }
    if (!selectedSize) {
      toast.info("You have to select a size to save the product.");
      return;
    }
    startTransition(() => {
      addItem({
        _id: product._id,
        category: product.category,
        quantity: 1,
        productId: product._id,
        image: selectedVariant?.images || [],
        name: product.name,
        price: product.price,
        purchased: false,
        variantId: selectedVariant?.priceId,
        size: selectedSize
      });
    });
  }, [selectedVariant, selectedSize, product, startTransition]);

  return (
    <>
      <div className="p-5">
        <div className="grid grid-cols-4 gap-2.5 justify-center">
          {product.sizes.map((size: string, index: number) => (
            <button
              key={index}
              className={`flex items-center justify-center border border-solid border-border-primary px-1 py-1.5 bg-black rounded transition duration-150 ease hover:border-border-secondary text-13 ${
                selectedSize === size ? "bg-white text-black" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              <span>{size}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-auto-fill-32 gap-2.5 mt-5">
          {product.variants.map((variant: { priceId: string; color: string; images: string[] }, index: number) => (
            <button
              key={index}
              className={`border border-solid border-border-primary w-8 h-8 flex justify-center relative rounded transition duration-150 ease hover:border-border-secondary ${
                selectedVariant?.color === variant.color
                  ? "border-border-secondary"
                  : ""
              }`}
              style={{ backgroundColor: `#${variant.color}` }}
              onClick={() => {
                setSelectedVariant(variant);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              title={`Color ${variant.color}`}
            >
              <span
                className={
                  selectedVariant?.color === variant.color
                    ? "absolute top-0 right-0 w-2 h-2 bg-white rounded-full"
                    : ""
                }
              />
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Save"}
      </button>
    </>
  );
}
