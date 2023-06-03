import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={user ? (<Register />) : (<Navigate to='/' replace />)}/>
        <Route path='/login' element={user ? (<Login />) : (<Navigate to='/' replace />)}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/products/' element={<ProductList />}/>
        <Route path='/products/:categories' element={<ProductList />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/success' element={<Success />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
