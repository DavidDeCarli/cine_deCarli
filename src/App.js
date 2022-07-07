import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <h1>Busca cualquier producto acá</h1>
      <ItemListContainer subtitulo='Venta Anticipada' />
    </>
  );
}

export default App;
