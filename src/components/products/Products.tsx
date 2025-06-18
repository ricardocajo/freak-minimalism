import Link from "next/link";
import { Images } from "./Images";
import DeleteButton from "../cart/DeleteButton";
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

  // Only filter products by category if extraClassname starts with 'category-'
  const filteredProducts = extraClassname.startsWith('category-') 
    ? products.filter(product => {
        // Get the category from extraClassname (remove 'category-')
        const category = extraClassname.replace('category-', '').toLowerCase();
        
        // Normalize the product category to lowercase for comparison
        const productCategory = product.category.toLowerCase();
        
        // Check if the category matches
        return productCategory === category;
      })
    : products;

  return (
    <div className={gridClassname + " " + extraClassname}>
      {filteredProducts.map((product) => (
        <div key={product.id} className="flex justify-between border border-solid border-border-primary rounded-md overflow-hidden flex-col">
          <Link href={`/products/${product.id}`} className="hover:scale-105 transition-all">
            <div className="relative">
              <Images
                src={product.images[0].replace('/images/', '')}
                alt={product.name}
                className="w-full max-w-img aspect-[2/3] brightness-90"
              />
              <div className="absolute top-0 right-0 w-full aspect-[2/3] bg-black">
                <div className="animate-pulse rounded-md bg-[#111] w-full aspect-[2/3] rounded-b-none"></div>
              </div>
            </div>
          </Link>
          <div className="flex justify-between flex-col gap-2.5 p-3.5 bg-background-secondary z-10">
            <div className="flex justify-between w-full">
              <Link href={`/products/${product.id}`} className="w-10/12">
                <h2 className="text-sm font-semibold truncate">{product.name}</h2>
              </Link>
              <button title="Add to favorites" className="text-gray-500 hover:text-gray-700">
                <svg
                  data-testid="geist-icon"
                  height={16}
                  strokeLinecap="round"
                  viewBox="0 0 16 16"
                  width={16}
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="text-sm">{product.price}€</div>
          </div>
        </div>
      ))}
    </div>
  );
};
