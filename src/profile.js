import React from 'react';
import {close} from './close.js'
function Profile(){
    return(
        <div className = "profile">
            <h3>Profile</h3>
            <button onClick={close}>X</button>
        </div>
    )
    
}
export default Profile;