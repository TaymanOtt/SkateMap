import React from 'react';
import {toggleNav} from './functions/toggleNav.js';
import logo from './imgs/logo.png';
import {close} from './functions/close.js'

function Logo(){
return(
<div className ='brand' onClick={close}> 
<img onClick={toggleNav} src={logo} alt="logo"></img>
</div>
)
}

export default Logo;