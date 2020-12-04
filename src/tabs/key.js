import React from 'react';
import {close} from '../functions/close.js'
import {addspot} from '../functions/addSpot.js'
function Key(){
    return(
        <div className = "key">
           <h1>Add Spots</h1>
           <button onClick={addspot}></button>
           <button onClick={close}>X</button>
        </div>
    )
    
}
export default Key;