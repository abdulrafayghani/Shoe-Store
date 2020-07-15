import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Product } from './Components/Products/Product';
import { ProductItem } from './Components/Products/ProductItem';
import { Header } from './Components/Header/Header'
import { InTheItem } from './Components/Products/InTheItem'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/products' element={<Product />} >
          <Route path= '/' element={<ProductItem />} /> 
          <Route path=':productId' element={<InTheItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
