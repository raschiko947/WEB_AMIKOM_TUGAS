import { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // useEffect untuk fetch data dari Public API (JSONPlaceholder)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=12"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Gagal memuat artikel. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const coffeeTopics = [
    "Tips Menyeduh Kopi", "Review Biji Kopi", "Tutorial Barista",
    "Kopi Nusantara", "Lifestyle", "Resep Kopi",
  ];

  const getRandomTopic = (id) => coffeeTopics[id % coffeeTopics.length];

  const getReadTime = (body) => Math.max(1, Math.ceil(body.split(" ").length / 200));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-amber-900 font-serif">Blog & Artikel</h2>
        <p className="text-gray-500 mt-2">
          Temukan pengetahuan seputar dunia kopi dari para ahli kami
        </p>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-amber-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-amber-700 font-medium">Memuat artikel kopi terbaik...</p>
          <p className="text-gray-400 text-sm">Mohon tunggu sebentar ☕</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-16">
          <p className="text-5xl mb-4">😵</p>
          <p className="text-red-500 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Blog Grid - Conditional Rendering */}
      {!loading && !error && !selectedPost && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 card-hover cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Fake Thumbnail */}
              <div
                className="h-44 flex items-center justify-center text-5xl"
                style={{
                  background: `hsl(${(post.id * 37) % 360}, 40%, 88%)`,
                }}
              >
                {["☕", "🫖", "🌱", "🔥", "🏔️", "🍵"][post.id % 6]}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200 font-medium">
                    {getRandomTopic(post.id)}
                  </span>
                  <span className="text-xs text-gray-400">
                    {getReadTime(post.body)} menit baca
                  </span>
                </div>

                <h3 className="font-bold text-gray-800 text-base capitalize leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                  {post.body}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-50">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + (post.userId % 26))}
                    </div>
                    <span className="text-xs text-gray-500">Author #{post.userId}</span>
                  </div>
                  <span className="text-amber-600 text-xs font-semibold hover:text-amber-800">
                    Baca selengkapnya →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Detail Post - Conditional Rendering */}
      {!loading && !error && selectedPost && (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium mb-6 transition-colors"
          >
            ← Kembali ke Blog
          </button>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100">
            <div
              className="h-64 flex items-center justify-center text-8xl"
              style={{
                background: `hsl(${(selectedPost.id * 37) % 360}, 40%, 88%)`,
              }}
            >
              {["☕", "🫖", "🌱", "🔥", "🏔️", "🍵"][selectedPost.id % 6]}
            </div>
            <div className="p-8">
              <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200 font-medium">
                {getRandomTopic(selectedPost.id)}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 capitalize mt-4 mb-2 font-serif">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-3 mb-6 text-sm text-gray-400">
                <span>Author #{selectedPost.userId}</span>
                <span>·</span>
                <span>{getReadTime(selectedPost.body)} menit baca</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">{selectedPost.body}</p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                Kopi adalah minuman yang menyatukan banyak orang dari berbagai latar belakang. 
                Dari sawah-sawah di Toraja hingga perkebunan di Flores, biji kopi Indonesia menyimpan 
                kekayaan rasa yang luar biasa. Setiap tegukan adalah perjalanan menuju asal usulnya.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
