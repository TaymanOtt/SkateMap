import React from 'react';
import './App.css';

function NavBar(){
    return(
        <div className = "navBar">
            <div>
        <h5>SA</h5>
            </div>
            <div>
        <ul>
            <button>Home</button>
            <button>Merch</button>
            <button>Profile</button>
        </ul> 
            </div>
        </div>
    );
}
export default NavBar;