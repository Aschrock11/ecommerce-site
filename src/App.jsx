import './App.css';
import CategorySection from './Components/CategorySection';
import FeaturedProducts from './Components/FeaturedProducts';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-[1200px]'>
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
