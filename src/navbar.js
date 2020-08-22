import React from 'react';
import './App.css';
import {showHome} from './showHome.js';
import {merch} from './showMerch.js';
import {profile} from './showProfile';
import logo from './cool.png';
function NavBar(){
    
    return(
        <div className = "navBar">
            <div className ='brand'> 
       
        <img src={logo} alt="logo"></img>
            </div>
            
            <button onClick = {showHome}>Home</button>
            <button onClick = {merch}>Key</button>
            <button onClick = {profile}>Profile</button>
            
        </div>
    );
}
export default NavBar;