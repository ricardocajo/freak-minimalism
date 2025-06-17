import Link from "next/link";
import { Images } from "./Images";
import DeleteButton from "../cart/DeleteButton";
import ProductCartInfo from "../cart/ProductCartInfo";
import { Skeleton } from "../ui/skeleton";
import { Product } from "@/app/(carts)/cart/action";

export const Products = ({
  products,
  extraClassname = "",
}: {
  products: Product[];
  extraClassname: string;
}) => {
  const gridClassname = [
    "grid gap-x-3.5 gap-y-6 sm:gap-y-9",
    extraClassname === "colums-mobile" && "grid-cols-auto-fill-110",
    extraClassname === "cart-ord-mobile" && "grid-cols-1",
    "sm:grid-cols-auto-fill-250",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassname}>
      {products.map((product, index) => {
        const {
          _id,
          category,
          productId,
          image,
          name,
          price,
          purchased,
          quantity,
          size,
          variantId,
        } = product;
        const productLink = `/${category}/${_id}`;
        const containerClassname = [
          "flex justify-between border border-solid border-border-primary rounded-md overflow-hidden",
          extraClassname === "cart-ord-mobile"
            ? "flex-row sm:flex-col"
            : "flex-col",
        ]
          .filter(Boolean)
          .join(" ");
        const linkClassname =
          extraClassname === "cart-ord-mobile"
            ? "w-6/12 sm:w-full hover:scale-105 transition-all"
            : "hover:scale-105 transition-all";
        const infoClassname = [
          extraClassname === "cart-ord-mobile" ? "w-6/12 sm:w-full" : "",
          "flex justify-between flex-col gap-2.5 p-3.5 bg-background-secondary z-10",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div className={containerClassname} key={index}>
            <Link href={productLink} className={linkClassname}>
              <Images
                image={image}
                name={name}
                width={280}
                height={425}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1154px) 33vw, (max-width: 1536px) 25vw, 20vw"
              />
            </Link>
            <div className={infoClassname}>
              <div className="flex justify-between w-full">
                <Link href={productLink} className="w-10/12">
                  <h2 className="text-sm font-semibold truncate">{name}</h2>
                </Link>
                {quantity ? (
                  purchased ? (
                    quantity > 1 && <span className="text-sm">{quantity}</span>
                  ) : (
                    <DeleteButton product={product} />
                  )
                ) : (
                  <></>
                )}
              </div>
              {!purchased && (
                <div className="text-sm">
                  {quantity ? (price * quantity).toFixed(2) : price} €
                </div>
              )}
              {quantity !== undefined && <ProductCartInfo product={product} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
