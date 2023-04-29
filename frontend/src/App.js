import React from 'react';
import { Routes, Route  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './views/Home';
import Layout from './components/Layout';
import About from './views/About';
import Products from './views/Products';
import ProductView from './views/ProductView';
import Cart from './views/Cart';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

function App() {
    return (
        <>
          <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path='about' element={<About/>} />
                    <Route path='products' element={<Products/>} />
                    <Route path='product/:id' element={<ProductView/>} />
                    <Route path='cart' element={<Cart/>} />
                    
                    <Route path='profile' element={<Profile/>} />
                    
                <Route path="*" element={<NotFound/>} />
                </Route>

          </Routes>   
          <ToastContainer/>
        </>
    );
}

export default App;

