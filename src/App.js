import React from 'react';
import './css/App.css';
import Map from './Map/map.js';
import NavBar from './navbar.js';
import Card from './tabs/Merch.js';
import Home from './tabs/home.js';
import Key from './tabs/key.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card />
      <Key />
      <Home/>
      <Map/>
    </div>
  );
}
export default App;
