import React from 'react';
import {close} from './close.js'
function Key(){
    return(
        <div className = "key">
            <h3>Profile</h3>
            <button onClick={close}>X</button>
        </div>
    )
    
}
export default Key;