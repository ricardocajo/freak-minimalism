"use client";

import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SuccessPage() {
  const { emptyCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    emptyCart();
    toast.success("Payment successful! Your order has been placed.");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [emptyCart, router]);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-lg mb-8">Thank you for your purchase. You will be redirected to the home page shortly.</p>
      </div>
    </div>
  );
}
