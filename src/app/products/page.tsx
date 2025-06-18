"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

export default function ProductsPage() {
  const { addProduct } = useCart();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: Product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={(product) => addProduct(product)}
          />
        ))}
      </div>
    </div>
  );
}
