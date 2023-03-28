import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Shop from './Components/Shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />}>
        <Route path=':category' element={<Shop />} />
      </Route>

      <Route />
      <Route />
    </Routes>
  );
}

export default App;
