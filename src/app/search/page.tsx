import { Products } from "@/components/products/Products";
import { getAllProducts } from "../actions";
import { Product } from '@/types/types';

interface SearchProps {
  searchParams: { [key: string]: string | undefined };
}

const normalizeText = (text: string): string => {
  return text
    .replace(/[-_]/g, "")
    .replace(/[^\w\s]/g, "")
    .toLowerCase();
};

const Search: React.FC<SearchProps> = async ({ searchParams }) => {
  const products = getAllProducts();
  let filteredProducts: Product[] = [];

  if (products) {
    try {
      if (searchParams.q) {
        const searchTerm = searchParams.q as string;
        filteredProducts = products.filter((product) => {
          const normalizedSearch = normalizeText(searchTerm);
          const normalizedEnName = normalizeText(product.translations.en.name);
          const normalizedPtName = normalizeText(product.translations.pt.name);
          
          // Check if search term matches either English or Portuguese name
          return normalizedEnName.includes(normalizedSearch) || 
                 normalizedPtName.includes(normalizedSearch);
        });
      } else {
        filteredProducts = products;
      }
    } catch (error: any) {
      console.error('Error filtering products:', error);
      filteredProducts = [];
    }
  }

  return (
    <section className="">
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} extraClassname="" />
      ) : (
        <h3 className="text-sm text-center">
          No products found for &quot;{searchParams.q}&quot;
        </h3>
      )}
    </section>
  );
};

export default Search;
