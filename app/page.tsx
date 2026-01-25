import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream-50/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-serif font-bold text-brown-800">Softly Covered Bakery</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-brown-700 hover:text-gold-600 transition">Home</a>
              <a href="#products" className="text-brown-700 hover:text-gold-600 transition">Products</a>
              <a href="#about" className="text-brown-700 hover:text-gold-600 transition">About</a>
              <a href="#contact" className="text-brown-700 hover:text-gold-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-brown-900 mb-6 animate-fade-in">
            Freshly Baked Every Day
          </h2>
          <p className="text-xl text-brown-600 mb-8 max-w-2xl mx-auto">
            Experience the warmth of artisan bread and pastries made with love and the finest ingredients
          </p>
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            View Our Menu
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-brown-900 text-center mb-16">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sourdough Bread", desc: "Traditional fermented bread with a perfect crust", price: "$6.99" },
              { name: "Croissants", desc: "Buttery, flaky layers baked to golden perfection", price: "$3.99" },
              { name: "Artisan Cakes", desc: "Custom cakes for every special occasion", price: "From $45" }
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-cream-200 to-brown-200"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-brown-900 mb-2">{product.name}</h3>
                  <p className="text-brown-600 mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold-600">{product.price}</span>
                    <button className="bg-brown-700 hover:bg-brown-800 text-white px-6 py-2 rounded-full transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-cream-50 to-brown-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-brown-900 mb-6">Our Story</h2>
              <p className="text-lg text-brown-700 mb-4">
                For over 20 years, we've been crafting artisan baked goods using traditional methods and the finest ingredients.
              </p>
              <p className="text-lg text-brown-700 mb-4">
                Every loaf, pastry, and cake is made with passion and dedication to quality that you can taste in every bite.
              </p>
              <p className="text-lg text-brown-700">
                We believe in supporting local farmers and using organic ingredients whenever possible.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-brown-300 to-cream-300 rounded-3xl shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-brown-900 text-center mb-16">
            Our Menu
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Breads", "Pastries", "Cakes", "Cookies", "Muffins", "Pies", "Bagels", "Donuts"].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center border-2 border-cream-200 hover:border-gold-400">
                <div className="h-32 bg-gradient-to-br from-cream-300 to-brown-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-serif font-bold text-brown-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-brown-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl text-cream-200 mb-8">
            123 Baker Street, Your City, ST 12345
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="bg-brown-800 rounded-xl p-6">
              <h3 className="text-gold-400 font-bold mb-2">Hours</h3>
              <p>Mon-Fri: 7am - 7pm</p>
              <p>Sat-Sun: 8am - 6pm</p>
            </div>
            <div className="bg-brown-800 rounded-xl p-6">
              <h3 className="text-gold-400 font-bold mb-2">Contact</h3>
              <p>(555) 123-4567</p>
              <p>hello@artisanbakery.com</p>
            </div>
          </div>
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            Get Directions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-950 text-cream-200 py-8 px-6 text-center">
        <p>&copy; 2026 Artisan Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
}
