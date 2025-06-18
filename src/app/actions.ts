import { Product } from "@/types/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 99.99,
    images: ["/images/product1.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L"]
  },
  {
    id: "2",
    name: "Product 2",
    price: 149.99,
    images: ["/images/product2.jpg"],
    colors: ["Red", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "3",
    name: "Product 3",
    price: 79.99,
    images: ["/images/product3.jpg"],
    colors: ["Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export const getAllProducts = () => {
  return products;
};

export const getRandomProducts = (productId: string) => {
  const filteredProducts = products.filter((product) => product.id !== productId);
  return filteredProducts.slice(0, 6);
};

export const getProduct = (id: string) => {
  return products.find((product) => product.id === id);
};
