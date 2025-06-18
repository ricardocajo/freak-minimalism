"use client";

import { Skeleton } from "../ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Images } from "./Images";

interface Product {
  images: string[];
  name: string;
}

interface ProductImagesProps {
  product: Product;
}

export const ProductImages = ({ product }: ProductImagesProps) => {
  if (!product.images || product.images.length === 0) {
    return (
      <Skeleton className="w-full rounded-b-none aspect-[2/3] min-w-[250px] lg:aspect-[4/6] lg:min-w-[560px]" />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative aspect-square">
        <Images
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {product.images.slice(1).map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Images
              src={image}
              alt={product.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
