import { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import { menuData } from "../data/menuData";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [displayedItems, setDisplayedItems] = useState(menuData);

  useEffect(() => {
    let items = activeCategory === "all"
      ? [...menuData]
      : menuData.filter((item) => item.category === activeCategory);

    if (sortBy === "price-asc") items.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") items.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") items.sort((a, b) => b.rating - a.rating);

    setDisplayedItems(items);
  }, [activeCategory, sortBy]);

  const categories = [
    { id: "all", label: "Semua Menu" },
    { id: "espresso", label: "☕ Espresso" },
    { id: "manual-brew", label: "🫖 Manual Brew" },
    { id: "frappe", label: "🥤 Frappe" },
    { id: "non-coffee", label: "🍵 Non Coffee" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-amber-900 font-serif">Menu Lengkap</h2>
        <p className="text-gray-500 mt-2">Pilihan kopi dan minuman terbaik dari Kopi Nusantara</p>
      </div>

      {/* Filter & Sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 btn-coffee
                ${activeCategory === cat.id
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-amber-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-amber-500"
        >
          <option value="default">Urutan Default</option>
          <option value="price-asc">Harga: Termurah</option>
          <option value="price-desc">Harga: Termahal</option>
          <option value="rating">Rating Tertinggi</option>
        </select>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-400 mb-4">{displayedItems.length} menu ditemukan</p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default MenuPage;
