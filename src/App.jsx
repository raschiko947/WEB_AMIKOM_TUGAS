import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [searchFilters, setSearchFilters] = useState(null);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
    setActiveMenu("home");
  };

  const renderPage = () => {
    if (activeMenu === "menu") return <MenuPage />;
    if (activeMenu === "about") return <AboutPage />;
    if (activeMenu === "blog") return <BlogPage />;
    return <HomePage searchFilters={searchFilters} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header
        onSearch={handleSearch}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
