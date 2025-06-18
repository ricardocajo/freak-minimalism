"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

interface ImagesProps {
  src: string;
  alt: string;
  className?: string;
}

export const Images = ({ src, alt, className }: ImagesProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={imageDimensions.width || 800}
        height={imageDimensions.height || 1200}
        unoptimized={true}
        className="object-cover"
      />
      {!imageLoaded && <Skeleton className="w-full h-full" />}
    </div>
  );
}
