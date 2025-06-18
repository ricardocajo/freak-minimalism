"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export const Images = ({ src, alt }: { src: string; alt: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setImageLoaded(true)}
        className="object-cover"
      />
      {!imageLoaded && <Skeleton className="w-full h-full" />}
    </div>
  );
}
