interface ProductTranslations {
  en: {
    name: string;
    description: string;
    composition: string;
    care: string;
    origin: string;
  };
  pt: {
    name: string;
    description: string;
    composition: string;
    care: string;
    origin: string;
  };
}

export interface Product {
  id: string;
  name: string;
  translations: ProductTranslations;
  price: number;
  discountPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  featured: boolean;
  new: boolean;
  _id?: string;
}

export type ProductDocument = Product;
