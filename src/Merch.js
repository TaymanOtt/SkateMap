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
           <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="RFBKWA8KY9B4A" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
 
           </div>
           <p>donate</p>
           <button onClick = {close}>X</button>
</div>);
}
export default Card;