"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Simple Header */}
      <header className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Header.jpg" 
            alt="Header Background"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/60 via-transparent to-brown-900/60"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="relative bg-white rounded-3xl p-5 shadow-2xl border-4 border-gold-400">
              <Image 
                src="/Grey Minimal Monogram Initials Logo.png" 
                alt="Softly Covered Bakery Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            {/* Right side - Text */}
            <div className="flex-1 text-right ml-8">
              <p className="text-white font-bold text-2xl drop-shadow-lg">
                ✨ Personalized baked goods made fresh daily  ✨
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="h-96 relative">
              <Image 
                src="/Mainpage.jpg" 
                alt="Fresh Baked Goods"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/40 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-4 drop-shadow-2xl">
                Fresh Baked Goods
              </h2>
              <p className="text-3xl text-cream-100 font-semibold drop-shadow-lg">
                🍕 Delivered to Your Door 🥐
              </p>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border-2 border-gold-200">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-80 md:h-auto relative">
                <Image 
                  src="/Nan khatai2.jpeg" 
                  alt="Fresh Baked Goods"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-cream-50 to-white">
                <h3 className="text-4xl font-serif font-bold text-brown-900 mb-6">About Our Kitchen</h3>
                <p className="text-brown-700 text-xl mb-5 leading-relaxed">
                  We're a <span className="font-bold text-brown-900">cloud kitchen</span> specializing in artisan baked goods made fresh daily. 
                </p>
                <p className="text-brown-700 text-xl leading-relaxed">
                  From our kitchen to your home 🏠 - quality breads, pastries, and treats delivered the same day! ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="mb-12">
            <h3 className="text-4xl font-serif font-bold text-brown-900 mb-8 text-center">Our Delicious Products</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Nan Khatai", desc: "Traditional butter cookies", price: "$15 For 1/2 KG", images: ["/Nan khatai.jpeg", "/Nan khatai2.jpeg", "/Nan khatai3.jpeg"] },
                { name: "Osmania Biscuits", desc: "Classic tea-time biscuits", price: "$20 (12pcs) | $30 (18pcs)", images: ["/Osmania1.jpeg","/Osmania Buiscets.jpeg",  "/Osmania2.jpeg"] },
                { name: "Dryfruits Vanilla Tea Cake", desc: "Rich vanilla cake loaded with premium dry fruits", price: "$45 / 1kg", images: ["/Dryfruits-Vanila tea cake.jpeg", "/DV2.jpeg", "/DV3.jpeg"] },
                { name: "Double Chocolate Banana Bread", desc: "Moist banana bread with double chocolate chips", price: "$22", images: ["/Double chocolate Banana Bread.jpeg", "/D2.jpeg", "/D3.jpeg"] },
                { name: "Small Pizza", desc: "Fresh and delicious personal pizzas", price: "Contact for price", images: ["/Pizza small.jpeg"] },
                { name: "XXL Pizza", desc: "Perfect for sharing and parties", price: "Contact for price", images: ["/pizza xxl.jpeg"] },
              
            ].map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-3xl shadow-2xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold mb-4">Get in Touch</h3>
              <p className="text-cream-100 text-xl mb-6">
                Ready to order? Contact us for delivery. 📦
              </p>
              <div className="space-y-3 text-xl">
                <p className="font-medium">📞 4378184742</p>
                <p className="font-medium">📍 Serving Your Area</p>
              </div>
              <a href="tel:4378184742" className="inline-block mt-8 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                🛒 Place an Order
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-brown-700">
        <p className="text-lg">✨ &copy; 2026 Softly Covered Bakery. Cloud Kitchen. ✨</p>
      </footer>
    </div>
  );
}

function ProductCard({ product }: { product: { name: string; desc: string; price: string; images: string[] } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gold-400">
      <div className="h-64 relative overflow-hidden group">
        <Image 
          src={product.images[currentImageIndex]} 
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brown-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brown-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              →
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-gold-500 w-6' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-cream-50">
        <h4 className="text-2xl font-serif font-bold text-brown-900 mb-2">{product.name}</h4>
        <p className="text-brown-600 text-lg mb-3">{product.desc}</p>
        <p className="text-gold-600 text-xl font-bold">{product.price}</p>
      </div>
    </div>
  );
}
