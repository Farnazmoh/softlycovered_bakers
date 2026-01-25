import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Simple Header */}
      <header className="py-8 px-6 bg-gradient-to-br from-cream-100 via-cream-50 to-gold-50 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-400 blur-xl opacity-20 rounded-full"></div>
              <Image 
                src="/Grey Minimal Monogram Initials Logo.png" 
                alt="Softly Covered Bakery Logo"
                width={90}
                height={90}
                className="object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-serif font-bold text-brown-900 drop-shadow-sm">Softly Covered Bakery</h1>
          </div>
          <p className="text-center text-brown-700 font-medium text-lg">✨ Cloud Kitchen | Fresh Delivery Daily ✨</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-serif font-bold bg-gradient-to-r from-brown-900 via-brown-700 to-gold-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Fresh Baked Goods
            </h2>
            <p className="text-2xl text-brown-700 font-medium">
              🍕 Delivered to Your Door 🥐
            </p>
          </div>

          {/* About */}
          <div className="bg-gradient-to-br from-white to-cream-50 rounded-3xl shadow-xl p-8 mb-12 border border-cream-200">
            <h3 className="text-3xl font-serif font-bold text-brown-900 mb-4">About Our Kitchen</h3>
            <p className="text-brown-700 text-lg mb-4 leading-relaxed">
              We're a cloud kitchen specializing in artisan baked goods made fresh daily. 
              From our kitchen to your home, we deliver quality breads, pastries, and treats.
            </p>
            <p className="text-brown-700 text-lg leading-relaxed">
              All orders are prepared fresh and delivered the same day. 🎂
            </p>
          </div>

          {/* Products */}
          <div className="mb-12">
            <h3 className="text-4xl font-serif font-bold text-brown-900 mb-8 text-center">Our Delicious Products</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Nan Khatai", desc: "Traditional butter cookies", image: "/Nan khatai.jpeg" },
                { name: "Osmania Biscuits", desc: "Classic tea-time biscuits", image: "/Osmania Buiscets.jpeg" },
                { name: "Small Pizza", desc: "Fresh and delicious personal pizzas", image: "/Pizza small.jpeg" },
                { name: "XXL Pizza", desc: "Perfect for sharing and parties", image: "/pizza xxl.jpeg" }
              ].map((product, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gold-400">
                  <div className="h-64 relative overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-cream-50">
                    <h4 className="text-2xl font-serif font-bold text-brown-900 mb-2">{product.name}</h4>
                    <p className="text-brown-600 text-lg">{product.desc}</p>
                  </div>
                </div>
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
