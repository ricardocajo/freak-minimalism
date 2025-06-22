interface ProductTranslations {
  en: {
    name: string;
    description: string;
    composition: string;
    care: string;
  };
  pt: {
    name: string;
    description: string;
    composition: string;
    care: string;
  };
}

interface Product {
  _id: string;
  translations: ProductTranslations;
  price: number;
  categories: string[];
  images: string[];
  colors: string[];
  sizes: string[];
  discountPrice?: number;
}

export const products: Product[] = [
  // T-Shirts
  {
    _id: "canilick",
    translations: {
      en: {
        name: "Can I Lick T-Shirt",
        description: "A classic freak-minimalism t-shirt, do you Lick?",
        composition: "100% pre-shrunk cotton | 184g",
        care: "It is recommended to iron the shirt inside out to preserve the embroidery."
      },
      pt: {
        name: "Camiseta Minimal Logo",
        description: "Uma t-shirt clássica freak-minimalism, do you Lick?",
        composition: "100% algodão pré-encolhido | 184g",
        care: "Recomenda-se passar a blusa do avesso para preservar o bordado"
      }
    },
    price: 30.00,
    categories: ["man"],
    images: [
      "/images/tshirts/canilick1.png",
      "/images/tshirts/canilick2.png"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    discountPrice: 27.75
  },

  // Pants
  {
    _id: "demonslayer",
    translations: {
      en: {
        name: "Demon Slayer Nezuko T-Shirt",
        description: "For Demon Slayer fans - Nezuko style",
        composition: "65% cotton, 35% polyester",
        care: "Machine wash cold. Do not bleach. Iron low heat.",
        origin: "Made in Portugal",
      },
      pt: {
        name: "Demon Slayer Nezuko T-Shirt",
        description: "Para fãs de Demon Slayer - Estilo Nezuko",
        composition: "65% algodão, 35% poliéster",
        care: "Lavar na máquina em água fria. Não alvejar. Passar a ferro em baixa temperatura.",
        origin: "Feito em Portugal",
      }
    },
    price: 65.00,
    categories: ["man", "new"],
    images: [
      "/images/new/demonslayer1.png",
      "/images/new/demonslayer2.png"
    ],
    colors: ["White", "Navy", "Beige"],
    sizes: ["28", "30", "32", "34"],
    discountPrice: 30
  },

  // Sweatshirts
  {
    _id: "naruto",
    translations: {
      en: {
        name: "Naruto Team 7 T-Shirt",
        description: "A Naruto Sasuke Sakura Kakashi T-Shirt",
        composition: "80% cotton, 20% polyester",
        care: "Machine wash cold. Do not bleach. Tumble dry low.",
        origin: "Made in Portugal",
      },
      pt: {
        name: "Naruto Equipa 7 T-Shirt",
        description: "T-Shirt de Naruto Sasuke Sakura e Kakashi",
        composition: "80% algodão, 20% poliéster",
        care: "Lavar na máquina em água fria. Não alvejar. Secar em baixa temperatura.",
        origin: "Feito em Portugal",
      }
    },
    price: 48.00,
    categories: ["new", "man"],
    images: [
      "/images/new/naruto1.png",
      "/images/new/naruto2.png"
    ],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    discountPrice: 30
  },
];
