export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  featured: boolean;
  new: boolean;
  description: string;
  _id?: string;
}

export type ProductDocument = Product;
