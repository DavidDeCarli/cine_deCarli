import { hover } from '@testing-library/user-event/dist/hover'; // ésto es por Bootstrap?
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h1>Hace tu reserva de cine</h1>
    </>
  );
}

export default App;
