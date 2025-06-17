import { Products } from "@/components/products/Products";
import { ProductCartInfo } from "@/components/cart/ProductCartInfo";
import Link from "next/link";
import { getItems } from "./action";
import { Suspense } from "react";
import { Loader } from "@/components/common/Loader";
import dynamic from "next/dynamic";

const ButtonCheckout = dynamic(
  () => import("../../../components/cart/ButtonCheckout"),
  {
    ssr: false,
    loading: () => (
      <p className="flex items-center justify-center w-full h-full text-sm">
        Continue
      </p>
    ),
  },
);

export async function generateMetadata() {
  return {
    title: "Cart",
  };
}

async function ProductsCart() {
  const products = await getItems();

  return (
    <div className="mt-6">
      {products.length > 0 ? (
        <div className="grid gap-6">
          <Products products={products} extraClassname="cart-ord-mobile" />
          <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Continue shopping
            </Link>
            <ButtonCheckout products={products} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Your cart is empty
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Add some products to your cart
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default async function CartPage() {
  return (
    <div className="container mx-auto px-2.5 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Cart
        </h1>
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          Continue shopping
        </Link>
      </div>

      <Suspense fallback={<Loader />}>
        <ProductsCart />
      </Suspense>
    </div>
  );
}
