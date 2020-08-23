import React from 'react';
import {close} from './close.js'
function Key(){
    return(
        <div className = "key">
            <h2>Key</h2>
            <div className='keyList'>
                <div className ='keyListItem'>
                    <p>Skatepark</p>
                    <img src='https://i.ibb.co/FBPWF2d/park.jpg' alt='park logo'/>
                 </div>
                <div className='keyListItem'>
                    <p>SkateSpot</p>
                    <img src ='https://i.ibb.co/x1dR6Fw/helmet.jpg' alt='skatespot'/>
                </div>
                
            </div>
            <div className='closer'>
            <button onClick={close}>X</button>
            </div>
        </div>
    )
    
}
export default Key;