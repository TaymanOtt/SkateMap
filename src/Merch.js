import React from 'react';
import './App.css';
import {close} from "./close.js";
//import StripeCheckout from 'react-stripe-checkout'


function Card(){
//function handleToken(token, addresses){
    //console.log({ token, addresses})
//}   
    return(<div className = "merch">
           <h5>Merch</h5>
           <div>
              
           </div>
           <p>donate</p>
           <button onClick = {close}>X</button>
</div>);
}
export default Card;