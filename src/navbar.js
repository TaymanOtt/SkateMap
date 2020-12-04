import React from 'react';
import Logo from './logo.js'
import {showHome} from './functions/showHome.js';
import {merch} from './functions/showMerch.js';
import {profile} from './functions/showProfile.js';



function NavBar(){   

    

    return(
        <div className = "navBar">
           <Logo />
            <button onClick = {showHome} id="homeButton">Home</button>
            <button onClick = {merch} id="merchButton">Donate</button>
            <button onClick = {profile}id="profileButton">Key</button>
        </div>
    );
}

export default NavBar;

