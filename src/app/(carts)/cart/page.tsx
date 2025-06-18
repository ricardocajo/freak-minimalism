"use client";

import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/contexts/CartContext";
import { ProductCartInfo } from "@/components/cart/ProductCartInfo";
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
  const { cart, removeFromCart, decrementQuantity, addToCart } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="mt-6">
        {cart.length > 0 ? (
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 object-cover w-full h-full rounded"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-sm font-medium">{item.name}</h2>
                          <p className="text-sm text-gray-500">{item.color}</p>
                          <p className="text-sm text-gray-500">{item.size}</p>
                          <p className="text-sm font-medium">{item.price}€</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => removeFromCart(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium">{(item.price * item.quantity).toFixed(2)}€</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm font-medium">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">Shipping</p>
                <p className="text-sm font-medium">Free</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">Total</p>
                <p className="text-sm font-medium">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€</p>
              </div>
              <ButtonCheckout cartItems={cart} />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <Link
              href="/products"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
