"use server";

export type Product = {
  name: string;
  category: string;
  _id: string;
  price: number;
  image: string[];
  sizes: string[];
  variants: Array<{
    priceId: string;
    color: string;
    images: string[];
  }>;
};

const products: Product[] = [
  // Add hardcoded product data here
];

export const getAllProducts = async () => {
  return products;
};

export const getCategoryProducts = async (category: string) => {
  return products.filter(product => product.category === category);
};

export const getRandomProducts = async (productId: string) => {
  const shuffleArray = (array: Product[]) => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const allProducts = products;
  const shuffledProducts = shuffleArray(allProducts);
  const randomProducts = shuffledProducts
    .filter((product) => product._id !== productId)
    .slice(0, 6);
  return randomProducts;
};

export const getProduct = async (id: string) => {
  return products.find(product => product._id === id);
};


