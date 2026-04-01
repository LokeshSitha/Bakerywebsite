'use client';

import { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-chocolate text-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Rustic Rose</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-caramel" />
                <span className="text-cream/80">Opening Hours</span>
              </div>
              <div className="ml-8 space-y-1 text-cream/70">
                <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-caramel transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-caramel transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-caramel transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-cream/70 mb-4">
              Subscribe to get special offers and updates
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-chocolate/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-cream text-chocolate placeholder-chocolate/40 focus:outline-none focus:ring-2 focus:ring-caramel"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-sage rounded-lg font-semibold hover:bg-sage/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-caramel mt-2 text-sm">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60">
          <p>&copy; 2026 Rustic Rose Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
