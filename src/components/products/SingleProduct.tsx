"use client";

import { useState } from "react";
import { Product } from "@/types/types";
import { ProductImages } from "./ProductImages";
import { AddToCart } from "@/components/cart/AddToCart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SingleProductProps {
  product: Product;
}

export const SingleProduct = ({ product }: SingleProductProps) => {
  const [selectedColor, setSelectedColor] = useState(product.selectedColor || product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.selectedSize || product.sizes[0]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <ProductImages product={product} />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold">{product.price}€</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium">Color</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 border-solid border-border-primary transition-colors duration-300 ${
                      selectedColor === color
                        ? "bg-black border-black"
                        : "bg-white border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium">Size</h2>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-full border-2 border-solid border-border-primary transition-colors duration-300 ${
                      selectedSize === size
                        ? "bg-black border-black"
                        : "bg-white border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <AddToCart product={product} selectedColor={selectedColor} selectedSize={selectedSize} />
        </div>
      </div>
    </div>
  );
};
