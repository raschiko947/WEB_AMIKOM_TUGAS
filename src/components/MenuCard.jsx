import { useState } from "react";

const MenuCard = ({ item }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const categoryLabel = {
    "espresso": "Espresso",
    "manual-brew": "Manual Brew",
    "frappe": "Frappe",
    "non-coffee": "Non Coffee",
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 card-hover">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 img-zoom">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300/d9993a/ffffff?text=Kopi";
          }}
        />
        {item.popular && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            ⭐ Popular
          </span>
        )}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <span className={isWishlisted ? "text-red-500" : "text-gray-400"}>
            {isWishlisted ? "❤️" : "🤍"}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium border border-amber-200">
            {categoryLabel[item.category] || item.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-amber-500">
            <span>⭐</span>
            <span className="font-medium text-gray-700">{item.rating}</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 mt-2 text-base">{item.name}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-amber-700">
              Rp {item.price.toLocaleString("id-ID")}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 btn-coffee
              ${addedToCart
                ? "bg-green-500 text-white scale-95"
                : "bg-amber-600 hover:bg-amber-500 text-white"
              }`}
          >
            {addedToCart ? "✓ Ditambahkan" : "+ Pesan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
