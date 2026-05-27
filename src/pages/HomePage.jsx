import { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import { menuData } from "../data/menuData";

const HomePage = ({ searchFilters }) => {
  const [filteredMenu, setFilteredMenu] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  // useEffect untuk animasi saat halaman load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // useEffect untuk filter menu berdasarkan search
  useEffect(() => {
    if (!searchFilters) {
      setFilteredMenu(menuData);
      return;
    }

    let result = menuData;

    if (searchFilters.query) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
        item.description.toLowerCase().includes(searchFilters.query.toLowerCase())
      );
    }

    if (searchFilters.category && searchFilters.category !== "all") {
      result = result.filter((item) => item.category === searchFilters.category);
    }

    if (searchFilters.priceRange && searchFilters.priceRange !== "all") {
      result = result.filter((item) => {
        if (searchFilters.priceRange === "cheap") return item.price < 25000;
        if (searchFilters.priceRange === "mid") return item.price >= 25000 && item.price <= 40000;
        if (searchFilters.priceRange === "premium") return item.price > 40000;
        return true;
      });
    }

    setFilteredMenu(result);
  }, [searchFilters]);

  const categories = [
    { id: "all", label: "Semua" },
    { id: "espresso", label: "☕ Espresso" },
    { id: "manual-brew", label: "🫖 Manual Brew" },
    { id: "frappe", label: "🥤 Frappe" },
    { id: "non-coffee", label: "🍵 Non Coffee" },
  ];

  const displayedMenu = activeCategory === "all"
    ? filteredMenu
    : filteredMenu.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className={`coffee-gradient text-white py-20 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-300 text-sm font-medium tracking-widest uppercase mb-3">Welcome to</p>
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-4">
                Kopi Terbaik dari<br />
                <span className="text-amber-300">Bumi Nusantara</span>
              </h2>
              <p className="text-amber-100 text-lg leading-relaxed mb-8 max-w-md">
                Kami menghadirkan pengalaman minum kopi yang otentik dengan biji kopi pilihan dari petani lokal terbaik Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-xl transition-all duration-200 btn-coffee shadow-lg">
                  Lihat Menu ☕
                </button>
                <button className="px-8 py-3 border-2 border-amber-400 text-amber-300 hover:bg-amber-800 font-semibold rounded-xl transition-all duration-200">
                  Tentang Kami
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10">
                {[
                  { value: "50+", label: "Varian Kopi" },
                  { value: "4.9★", label: "Rating" },
                  { value: "10K+", label: "Pelanggan" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-amber-300">{stat.value}</p>
                    <p className="text-xs text-amber-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-amber-800 bg-opacity-40 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 bg-amber-700 bg-opacity-50 rounded-full flex items-center justify-center">
                    <span className="text-9xl">☕</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 rounded-xl px-3 py-2 text-sm font-bold shadow-lg">
                  Single Origin 🌱
                </div>
                <div className="absolute -bottom-2 -left-2 bg-white text-amber-900 rounded-xl px-3 py-2 text-sm font-bold shadow-lg">
                  Fresh Roasted ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-900 font-serif">Menu Kami</h2>
          <p className="text-gray-500 mt-2">Temukan cita rasa yang sempurna untuk hari-harimu</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 btn-coffee
                ${activeCategory === cat.id
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {displayedMenu.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">☕</p>
            <p className="text-lg font-medium">Menu tidak ditemukan</p>
            <p className="text-sm mt-2">Coba kata kunci atau filter lain</p>
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="bg-amber-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 font-serif mb-10">Kenapa Kopi Nusantara?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌱", title: "Single Origin", desc: "Biji kopi langsung dari petani lokal terpercaya" },
              { icon: "🔥", title: "Fresh Roasted", desc: "Dipanggang segar setiap hari untuk rasa terbaik" },
              { icon: "👨‍🍳", title: "Expert Barista", desc: "Barista bersertifikat internasional" },
              { icon: "🚀", title: "Fast Delivery", desc: "Pengiriman cepat ke seluruh kota Yogyakarta" },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 text-center card-hover shadow-sm border border-amber-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
