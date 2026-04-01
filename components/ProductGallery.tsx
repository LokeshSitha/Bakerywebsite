'use client';

import { useState } from 'react';
import { products, Product } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductGalleryProps {
  onAddToCart: (product: Product) => void;
}

type Category = 'all' | 'bread' | 'pastries' | 'cakes';

export default function ProductGallery({ onAddToCart }: ProductGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'bread', label: 'Bread' },
    { key: 'pastries', label: 'Pastries' },
    { key: 'cakes', label: 'Cakes' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate text-center mb-4">
          Our Products
        </h2>
        <p className="text-chocolate/70 text-center mb-12 max-w-2xl mx-auto">
          Fresh from the oven every morning. Browse our selection of artisan baked goods
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-chocolate text-cream'
                  : 'bg-white text-chocolate hover:bg-chocolate/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-chocolate/60 py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
