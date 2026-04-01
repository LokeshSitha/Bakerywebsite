'use client';

import { X, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/products';
import CartItem from './CartItem';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { product: Product; quantity: number }[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function Cart({ isOpen, onClose, cart, onUpdateQuantity, onRemove }: CartProps) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-chocolate/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-chocolate/10">
            <h2 className="font-serif text-2xl font-bold text-chocolate flex items-center gap-2">
              <ShoppingBag size={24} />
              Your Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-chocolate/60 hover:text-chocolate transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-chocolate/30 mb-4" />
                <p className="text-chocolate/60">Your cart is empty</p>
                <p className="text-chocolate/40 text-sm mt-2">Add some delicious items!</p>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                />
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-chocolate/10 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-chocolate/70">Subtotal</span>
                <span className="font-serif text-2xl font-bold text-chocolate">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full bg-chocolate text-cream py-4 rounded-lg font-semibold hover:bg-sage transition-colors duration-300"
                onClick={() => {
                  alert('Checkout functionality coming soon!');
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
