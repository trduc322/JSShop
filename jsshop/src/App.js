import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items'
import Size from './Size'
import Cart from './Cart'

function App() {
  return (
    <div className="App">
      <Size/>
      <Items/>
      <Cart/>
      
    </div>
  );
}

export default App;
