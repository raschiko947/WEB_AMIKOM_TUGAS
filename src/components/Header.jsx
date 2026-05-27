import { useState } from "react";

const Header = ({ onSearch, activeMenu, setActiveMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ query: searchQuery, category, priceRange });
  };

  return (
    <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
              <span className="text-amber-900 text-xl font-bold">☕</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif">Kopi Nusantara</h1>
              <p className="text-amber-300 text-xs">Premium Coffee Shop</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 btn-coffee
                  ${activeMenu === item.id
                    ? "bg-amber-500 text-white"
                    : "text-amber-200 hover:bg-amber-800 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center gap-3">
            <button className="relative p-2 text-amber-200 hover:text-white transition-colors">
              🛒
              <span className="absolute -top-1 -right-1 bg-amber-400 text-amber-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-amber-200 hover:bg-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Search & Filter Form */}
        <div className="pb-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Cari kopi favorit kamu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-amber-800 text-white placeholder-amber-400 border border-amber-700 focus:outline-none focus:border-amber-400 text-sm"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded-lg bg-amber-800 text-white border border-amber-700 focus:outline-none focus:border-amber-400 text-sm"
            >
              <option value="all">Semua Kategori</option>
              <option value="espresso">Espresso</option>
              <option value="manual-brew">Manual Brew</option>
              <option value="frappe">Frappe</option>
              <option value="non-coffee">Non Coffee</option>
            </select>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2 rounded-lg bg-amber-800 text-white border border-amber-700 focus:outline-none focus:border-amber-400 text-sm"
            >
              <option value="all">Semua Harga</option>
              <option value="cheap">Di bawah Rp 25.000</option>
              <option value="mid">Rp 25.000 - 40.000</option>
              <option value="premium">Di atas Rp 40.000</option>
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-amber-900 font-semibold rounded-lg transition-all duration-200 btn-coffee text-sm whitespace-nowrap"
            >
              🔍 Cari
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-amber-800 bg-amber-900 px-4 py-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveMenu(item.id); setIsMenuOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded-lg mb-1 text-sm font-medium transition-colors
                ${activeMenu === item.id ? "bg-amber-500 text-white" : "text-amber-200 hover:bg-amber-800"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
