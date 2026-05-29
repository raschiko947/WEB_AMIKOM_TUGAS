const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-amber-900 text-lg">☕</span>
              </div>
              <h3 className="text-white text-lg font-bold font-serif">Kopi Nusantara</h3>
            </div>
            <p className="text-sm text-amber-400 leading-relaxed">
              Menyajikan cita rasa kopi terbaik dari seluruh penjuru Nusantara. 
              Setiap tegukan membawa kisah dari tanah asalnya.
            </p>
            <div className="flex gap-3 mt-4">
              {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                <button key={i} className="w-9 h-9 bg-amber-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <span className="text-sm">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Menu</h4>
            <ul className="space-y-2 text-sm">
              {["Espresso Series", "Manual Brew", "Frappe & Blend", "Non Coffee", "Snack & Makanan", "Paket Promo"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informasi</h4>
            <ul className="space-y-2 text-sm">
              {["Tentang Kami", "Blog & Artikel", "Karir", "FAQ", "Syarat & Ketentuan", "Kebijakan Privasi"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <div className="space-y-3 text-sm text-amber-400">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Jl. Kopi Arabika No. 17, Yogyakarta 55281</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>halo@kopinusantara.id</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span>Setiap hari, 07.00 - 22.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-amber-600 text-xs">
            © 2025 Kopi Nusantara. Dibuat dengan ❤️ untuk pecinta kopi Indonesia.
          </p>
          <p className="text-amber-600 text-xs">
            Final Project — Pemrograman Web ST084 | Universitas Amikom Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
