'use client';

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 px-6 bg-chocolate text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-cream/70 mb-12">
          Don&apos;t just take our word for it
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-cream/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <Quote
              size={48}
              className="mx-auto text-caramel mb-6 opacity/50"
            />
            <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < testimonials[currentIndex].rating ? 'fill-caramel text-caramel' : 'text-cream/30'}
                />
              ))}
            </div>

            <p className="font-semibold text-lg">
              {testimonials[currentIndex].name}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-caramel w-8' : 'bg-cream/30 hover:bg-cream/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
