import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Shop from './Components/Shop';
import Detail from './Components/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />}></Route>
      <Route path='item' element={<Detail />} />
      <Route path='item/:productId' element={<Detail />} />
    </Routes>
  );
}

export default App;
