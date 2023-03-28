import './App.css';
import CategorySection from './Components/CategorySection';
import FeaturedProducts from './Components/FeaturedProducts';
import Header from './Components/Header';
import ShopNow from './Components/ShopNow';
import TrendingProducts from './Components/TrendingProducts';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-[1200px]'>
        <CategorySection />
        <FeaturedProducts />
        <ShopNow />
        <TrendingProducts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
