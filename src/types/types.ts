export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  featured: boolean;
  new: boolean;
  description: string;
  composition: string;
  care: string;
  origin: string;
  _id?: string;
}

export type ProductDocument = Product;
