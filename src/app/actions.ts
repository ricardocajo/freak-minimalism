import { Product } from "@/types/types";
import { products as productData } from "@/data/products";

export const products: Product[] = productData.map(product => ({
  ...product,
  id: product._id,
  name: product.translations.en.name,
  featured: false,
  new: product.categories.includes('new'),
  categories: product.categories
}));

export const getAllProducts = () => {
  return products;
};

export const getRandomProducts = (productId: string) => {
  const filteredProducts = products.filter((product) => product.id !== productId);
  return filteredProducts.slice(0, 6);
};

type CategoryMap = {
  [key: string]: string;
};

export const getCategoryProducts = (category: string) => {
  // Normalize category by converting to lowercase (no hyphen replacement)
  const normalizedCategory = category.toLowerCase();
  
  // Map category names to match our product data
  const categoryMap: CategoryMap = {
    't-shirts': 't-shirts',
    'tshirt': 't-shirts',
    'tshirts': 't-shirts',
    'pants': 'pants',
    'sweatshirt': 'sweatshirts',
    'sweatshirts': 'sweatshirts'
  };

  const mappedCategory = categoryMap[normalizedCategory] || normalizedCategory;
  
  return products.filter((product) => product.categories.some(cat => cat.toLowerCase() === mappedCategory.toLowerCase()));
};

export const getProduct = (id: string) => {
  return products.find((product) => product.id === id);
};
