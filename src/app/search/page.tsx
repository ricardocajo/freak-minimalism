"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProducts } from '../actions';
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

const Search: React.FC<SearchProps> = ({ searchParams }) => {
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
          return normalizedEnName.includes(normalizedSearch) || normalizedPtName.includes(normalizedSearch);
        });
      } else {
        filteredProducts = products;
      }
    } catch (error) {
      console.error('Error filtering products:', error);
    }
  }

  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="grid gap-x-3.5 gap-y-6 sm:gap-y-9 sm:grid-cols-auto-fill-250">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Link href={`/products/${product._id}`} className="block">
                <a className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:scale-[1.02]" href={`/products/${product._id}`}>
                  <div className="relative">
                    <div className="relative w-full max-w-img aspect-[2/3] brightness-90">
                      <Image
                        src={product.images[0]}
                        alt={product.translations.en.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </a>
                <div className="flex justify-between flex-col gap-2.5 p-3.5 bg-background-secondary z-10">
                  <div className="flex justify-between w-full">
                    <a className="w-10/12" href={`/products/${product._id}`}>
                      <h2 className="text-sm font-semibold truncate">{product.translations.en.name}</h2>
                    </a>
                    {product.discountPrice && (
                      <span className="flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-[#E53E3E] rounded-full">
                        {(((product.price - product.discountPrice) / product.price) * 100).toFixed(0)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {product.discountPrice ? (
                      <>
                        <span className="text-sm line-through text-[#A1A1A1]">{product.price}€</span>
                        <span className="text-sm font-semibold">{product.discountPrice}€</span>
                      </>
                    ) : (
                      <span className="text-sm">{product.price}€</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <h3 className="text-sm text-center mb-4">
              {t('search.noResults', { query: searchParams.q })}
            </h3>
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              {t('search.backToHome')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
