import { useState } from "react";
// 1. WAJIB: Import Link dari react-router-dom
import { NavLink } from "react-router-dom";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ query, category, priceRange });
    }
  };

  return (
    <header className="bg-[#8B4513] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        {/* Bagian Atas: Logo dan Navigasi Menu */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">☕</span>
            <div>
              <h1 className="text-xl font-bold font-serif">Kopi Nusantara</h1>
              <p className="text-xs text-amber-200">Premium Coffee Shop</p>
            </div>
          </div>

          {/* 2. PERBAIKAN: Gunakan tag <Link to="..."> untuk navigasi */}
          <nav className="flex gap-2 font-medium">
            {/* Link HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-lg transition-all ${isActive
                  ? "bg-amber-500 text-amber-950 font-bold shadow-sm"
                  : "text-amber-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                }`
              }
            >
              Home
            </NavLink>

            {/* Link MENU */}
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-lg transition-all ${isActive
                  ? "bg-amber-500 text-amber-950 font-bold shadow-sm"
                  : "text-amber-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                }`
              }
            >
              Menu
            </NavLink>

            {/* Link ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-lg transition-all ${isActive
                  ? "bg-amber-500 text-amber-950 font-bold shadow-sm"
                  : "text-amber-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                }`
              }
            >
              About
            </NavLink>

            {/* Link BLOG */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-lg transition-all ${isActive
                  ? "bg-amber-500 text-amber-950 font-bold shadow-sm"
                  : "text-amber-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                }`
              }
            >
              Blog
            </NavLink>
          </nav>
          {/* Icon Keranjang Kanan */}
          <div className="relative cursor-pointer">
            <span className="text-xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-amber-500 text-xs text-amber-950 font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        {/* Bagian Bawah: Form Pencarian (Search Bar) */}
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 items-center bg-transparent">
          <input
            type="text"
            placeholder="Cari kopi favorit kamu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 min-w-[200px] p-2 rounded-lg text-gray-800 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg text-gray-800 bg-white focus:outline-none"
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
            className="p-2 rounded-lg text-gray-800 bg-white focus:outline-none"
          >
            <option value="all">Semua Harga</option>
            <option value="cheap">Di bawah Rp 25.000</option>
            <option value="mid">Rp 25.000 - Rp 40.000</option>
            <option value="premium">Di atas Rp 40.000</option>
          </select>

          <button type="submit" className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-lg transition-all flex items-center gap-1 shadow">
            🔍 Cari
          </button>
        </form>

      </div>
    </header>
  );
}

export default Header;