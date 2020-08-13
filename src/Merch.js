import React from 'react';
import './App.css';
import {close} from "./close.js";

function Card(){
   
    return(<div className = "merch">
           <h5>Merch</h5>
           <button onClick = {close}>X</button>
</div>);
}
export default Card;