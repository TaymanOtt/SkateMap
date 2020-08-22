import React from 'react';
import './App.css';
import Map from './map';
import NavBar from './navbar.js';
import Card from './Merch.js';
import Home from './home.js';
import Key from './key.js';
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
