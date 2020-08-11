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
            <li><a href = "#">Home</a></li>
            <li><a href = "#">Merch</a></li>
            <li><a href ="#">Profile</a></li>
        </ul> 
            </div>
        </div>
    );
}
export default NavBar;