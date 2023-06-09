import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Shop from './Components/Shop';
import Detail from './Components/Detail';
import CartProvider from './Components/CartContext';
import Success from './Components/Success';
import Cancel from './Components/Cancel';
import Checkout from './Components/Checkout';
import About from './Components/About';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:category' element={<Categories />} />
        <Route path='item' element={<Detail />} />
        <Route path='item/:productId' element={<Detail />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
