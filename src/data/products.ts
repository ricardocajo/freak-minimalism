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

interface Product {
  _id: string;
  translations: ProductTranslations;
  price: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  discountPrice?: number;
}

export const products: Product[] = [
  // T-Shirts
  {
    _id: "tshirt1",
    translations: {
      en: {
        name: "Minimal Logo T-Shirt",
        description: "Classic minimalist t-shirt with subtle logo print",
        composition: "100% cotton",
        care: "Machine wash cold. Do not bleach. Tumble dry low.",
        origin: "Made in Portugal :)",
      },
      pt: {
        name: "Camiseta Minimal Logo",
        description: "Camiseta minimalista clássica com logo discreta",
        composition: "100% algodão",
        care: "Lavar na máquina em água fria. Não alvejar. Secar em baixa temperatura.",
        origin: "Feito em Portugal :)",
      }
    },
    price: 35.00,
    category: "t-shirts",
    images: [
      "/images/tshirts/tshirt1.png",
      "/images/tshirts/tshirt2.png"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    discountPrice: 30,
  },

  // Pants
  {
    _id: "pants1",
    translations: {
      en: {
        name: "Slim Fit Chinos",
        description: "Modern slim fit chinos in premium cotton",
        composition: "65% cotton, 35% polyester",
        care: "Machine wash cold. Do not bleach. Iron low heat.",
        origin: "Made in Portugal",
      },
      pt: {
        name: "Calças Chinos Slim Fit",
        description: "Calças chinos modernas slim fit em algodão premium",
        composition: "65% algodão, 35% poliéster",
        care: "Lavar na máquina em água fria. Não alvejar. Passar a ferro em baixa temperatura.",
        origin: "Feito em Portugal",
      }
    },
    price: 65.00,
    category: "pants",
    images: [
      "/images/pants/pants1.png",
      "/images/pants/pants2.png"
    ],
    colors: ["Navy", "Beige"],
    sizes: ["28", "30", "32", "34"]
  },

  // Sweatshirts
  {
    _id: "sweatshirt1",
    translations: {
      en: {
        name: "Minimal Logo Sweatshirt",
        description: "Premium cotton sweatshirt with minimalist logo",
        composition: "80% cotton, 20% polyester",
        care: "Machine wash cold. Do not bleach. Tumble dry low.",
        origin: "Made in Portugal",
      },
      pt: {
        name: "Moletom Minimal Logo",
        description: "Moletom premium em algodão com logo minimalista",
        composition: "80% algodão, 20% poliéster",
        care: "Lavar na máquina em água fria. Não alvejar. Secar em baixa temperatura.",
        origin: "Feito em Portugal",
      }
    },
    price: 48.00,
    category: "sweatshirts",
    images: [
      "/images/sweatshirts/sweatshirt1.png",
      "/images/sweatshirts/sweatshirt2.png"
    ],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"]
  },
];
