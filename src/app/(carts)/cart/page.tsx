"use client";

import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import ProductCartInfo from "@/components/cart/ProductCartInfo";
import Link from "next/link";
import dynamic from "next/dynamic";

const ButtonCheckout = dynamic(
  () => import("@/components/cart/ButtonCheckout"),
  {
    ssr: false,
    loading: () => (
      <p className="flex items-center justify-center w-full h-full text-sm">
        Continue
      </p>
    ),
  }
);

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="mt-6">
        {cart.length > 0 ? (
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cart.map((product: Product) => (
                <ProductCartInfo key={product._id} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Continue shopping
              </Link>
              <ButtonCheckout products={cart} />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
            <Link
              href="/"
              className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
