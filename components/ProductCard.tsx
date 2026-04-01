'use client';

import { Plus } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const categoryColors = {
    bread: 'bg-caramel/20 text-caramel',
    pastries: 'bg-sage/20 text-sage',
    cakes: 'bg-chocolate/20 text-chocolate',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[product.category]}`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-chocolate mb-2">
          {product.name}
        </h3>
        <p className="text-chocolate/70 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-chocolate">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-chocolate text-cream px-4 py-2 rounded-lg hover:bg-sage transition-colors duration-300"
          >
            <Plus size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
