export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  featured: boolean;
  new: boolean;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export type ProductDocument = Product;
