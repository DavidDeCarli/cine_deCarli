// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <h1>Hace tu reserva de cine</h1>
      <ItemListContainer subtitulo='Venta Anticipada' />
    </>
  );
}

export default App;
