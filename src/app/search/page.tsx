"use client";

import { Products } from "@/components/products/Products";
import { getAllProducts } from "../actions";
import { Product } from '@/types/types';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

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

  const { t } = useTranslation('common');

  return (
    <section className="">
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} extraClassname="" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-sm text-center">
            No products found for "{searchParams.q}"
          </h3>
          <div className="flex items-center justify-center p-4 bg-black rounded-full">
            <div className="flex flex-col items-center text-center">
              <Link
                href="/customize"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white rounded-full hover:from-[#00A1CE] hover:to-[#007195] transition-all"
              >
                {t('products.customizeButton')}
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Search;
