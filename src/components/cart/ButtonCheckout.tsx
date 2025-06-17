"use client";

import axios from "axios";
import { useTransition, useCallback, useMemo } from "react";
import { Loader } from "../common/Loader";
import { toast } from "sonner";
import { Product } from "@/app/(carts)/cart/action";

interface ButtonCheckoutProps {
  products: Product[];
}

const ButtonCheckout = ({ products }: ButtonCheckoutProps) => {
  let [isPending, startTransition] = useTransition();

  const lineItems = useMemo(
    () =>
      products.map((product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            images: product.image,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      })),
    [products]
  );

  const handleCheckout = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/stripe/create-checkout-session", {
        lineItems,
      });

      window.location.href = data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Failed to create checkout session");
    }
  }, [lineItems]);

  return (
    <button
      onClick={() => startTransition(handleCheckout)}
      className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      disabled={isPending}
    >
      {isPending ? <Loader height={20} width={20} /> : "Checkout"}
    </button>
  );
};

export default ButtonCheckout;
