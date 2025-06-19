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
                src={product.images[0]}
                alt={product.name}
                className="w-full max-w-img aspect-[2/3] brightness-90"
              />
            </div>
          </Link>
          <div className="flex justify-between flex-col gap-2.5 p-3.5 bg-background-secondary z-10">
            <div className="flex justify-between w-full">
              <Link href={`/products/${product.id}`} className="w-10/12">
                <h2 className="text-sm font-semibold truncate">{product.name}</h2>
              </Link>
              {product.discountPrice && (
                <span className="flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-[#E53E3E] rounded-full">
                  {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                </span>
              )}
            </div>
            {product.discountPrice ? (
              <div className="flex items-center gap-1">
                <span className="text-sm line-through text-[#A1A1A1]">{product.price}€</span>
                <span className="text-sm font-semibold">{product.discountPrice}€</span>
              </div>
            ) : (
              <div className="text-sm">{product.price}€</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
