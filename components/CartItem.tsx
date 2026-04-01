'use client';

import { Minus, Plus, X } from 'lucide-react';
import { Product } from '@/lib/products';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function CartItem({ product, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-chocolate/10">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="font-serif font-semibold text-chocolate">{product.name}</h4>
        <p className="text-chocolate/60 text-sm mb-2">${product.price.toFixed(2)} each</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
            className="p-1 rounded bg-chocolate/10 text-chocolate hover:bg-chocolate/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus size={16} />
          </button>
          <span className="font-medium text-chocolate w-8 text-center">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            className="p-1 rounded bg-chocolate/10 text-chocolate hover:bg-chocolate/20"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => onRemove(product.id)}
          className="p-1 text-chocolate/40 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>
        <span className="font-semibold text-chocolate">
          ${(product.price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
