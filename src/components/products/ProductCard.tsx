"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Color</span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="rounded-md border-gray-300 dark:border-gray-700"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Size</span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="rounded-md border-gray-300 dark:border-gray-700"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
