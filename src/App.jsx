import "./App.css";
import CategorySection from "./Components/CategorySection";
import FeaturedProducts from "./Components/FeaturedProducts";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <CategorySection />
        <FeaturedProducts />
        {/* Shop now card (Photo and description) */}
        {/* trending items */}
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
