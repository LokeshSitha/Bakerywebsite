'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-chocolate/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
          Freshly Baked, Daily
        </h1>
        <p className="font-sans text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
          Artisanal breads, pastries & cakes made with love using traditional recipes and the finest ingredients
        </p>
        <a
          href="#products"
          className="inline-block bg-chocolate text-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-chocolate/90 hover:scale-105 transition-all duration-300"
        >
          Order Now
        </a>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 hover:text-cream transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
