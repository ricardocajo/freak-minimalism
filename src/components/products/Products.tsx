import Link from "next/link";
import { Images } from "./Images";
import DeleteButton from "../cart/DeleteButton";
import ProductCartInfo from "../cart/ProductCartInfo";
import { Skeleton } from "../ui/skeleton";
import { Product } from "@/types/types";

interface ProductsProps {
  products: Product[];
  extraClassname?: string;
}

export const Products = ({ products, extraClassname = "" }: ProductsProps) => {
  const gridClassname = [
    "grid gap-x-3.5 gap-y-6 sm:gap-y-9",
    extraClassname === "colums-mobile" && "grid-cols-auto-fill-110",
    extraClassname === "cart-ord-mobile" && "grid-cols-1",
    "sm:grid-cols-auto-fill-250",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassname + " " + extraClassname}>
      {products.map((product) => (
        <div key={product.id} className="relative group">
          <Link href={`/products/${product.id}`}>
            <Images
              src={product.images[0]}
              alt={product.name}
            />
          </Link>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.price}€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
