import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContext from './context/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartCustomProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartCustomProvider>
          <NavBar />
          <h1>Busca cualquier producto acá</h1>
          <Routes>
            <Route path="/" element={<ItemListContainer subtitulo='Tenemos lo que querés'/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer subtitulo='Tenemos lo que querés'/>}/>
            <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/context/CartContext" element={<CartContext/>}/>
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
