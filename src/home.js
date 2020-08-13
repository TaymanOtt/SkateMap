import React from 'react';
function close(){
    let h = document.getElementsByClassName('home')[0];
    h.style.display = 'none';
}
function Home() {
    return(
    <div className = 'home'>
        <h1>Welcome!</h1>
        <p>This app was created to help skaters
        and other action sports enthusists in the 
        Madison area spend less time looking for spots 
        and more time skating.</p>
        <button onClick = {close}>X</button>
    </div>);
}

export default Home;