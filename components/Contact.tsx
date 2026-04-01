'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-chocolate text-center mb-4">
          Visit Us
        </h2>
        <p className="text-chocolate/70 text-center mb-12 max-w-2xl mx-auto">
          We&apos;d love to hear from you. Stop by for a coffee or send us a message
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-cream rounded-xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-chocolate mb-6">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-chocolate/70 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-chocolate/20'
                    } bg-white text-chocolate focus:outline-none focus:border-sage`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-chocolate/70 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-chocolate/20'
                    } bg-white text-chocolate focus:outline-none focus:border-sage`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-chocolate/70 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-chocolate/20'
                    } bg-white text-chocolate focus:outline-none focus:border-sage resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-chocolate text-cream py-4 rounded-lg font-semibold hover:bg-sage transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {isSubmitted && (
                  <p className="text-green-600 text-center font-medium">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-cream rounded-xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-chocolate mb-6">
                Find Us
              </h3>

              <div className="bg-chocolate/10 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-chocolate/40 mb-2" />
                  <p className="text-chocolate/60">Map Placeholder</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chocolate/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-chocolate" />
                  </div>
                  <div>
                    <p className="font-semibold text-chocolate">Address</p>
                    <p className="text-chocolate/70">123 Baker Street, Sweet City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chocolate/10 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-chocolate" />
                  </div>
                  <div>
                    <p className="font-semibold text-chocolate">Phone</p>
                    <p className="text-chocolate/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-chocolate/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-chocolate" />
                  </div>
                  <div>
                    <p className="font-semibold text-chocolate">Email</p>
                    <p className="text-chocolate/70">hello@rusticrose.bakery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
