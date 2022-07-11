import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>Busca cualquier producto acá</h1>
        <Routes>
            <Route path="/" element={<ItemListContainer subtitulo='Venta Anticipada'/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer subtitulo='Venta Anticipada'/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
