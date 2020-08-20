import React from 'react';
import './App.css';
import {showHome} from './showHome.js';
import {merch} from './showMerch.js';
import {profile} from './showProfile';

function NavBar(){
    
    return(
        <div className = "navBar">
            <div>
        <h5>StreetKey</h5>
            </div>
            
            <button onClick = {showHome}>Home</button>
            <button onClick = {merch}>Merch</button>
            <button onClick = {profile}>Profile</button>
            
        </div>
    );
}
export default NavBar;