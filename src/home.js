import React from 'react';
import {close} from './close';
function Home() {
    return(
    <div className = 'home'>
        <h1>Welcome!</h1>
        <p>This app was created to help skaters
        and other action sports enthusists in the 
        Madison area spend less time looking for spots 
        and more time skating.</p>
        <div className = 'closeBtn'>
        <button onClick = {close}>X</button>
        </div>
    </div>);
}

export default Home;