import React from 'react';
import './App.css';



function showHome(){
    let m = document.getElementsByClassName('merch')[0];
let h = document.getElementsByClassName('home')[0];
let p = document.getElementsByClassName('profile')[0];
    if(h.style.display === 'none'){
    h.style.display = 'block';
    m.style.display = 'none';
    p.style.display = 'none';
}else {
    h.style.display = 'none';
}
}
function merch(){
    let m = document.getElementsByClassName('merch')[0];
    let h = document.getElementsByClassName('home')[0];
    let p = document.getElementsByClassName('profile')[0];
    if (m.style.display === 'none'){
        m.style.display = "grid";
        h.style.display = 'none';
        p.style.display = 'none';
    } else{
        m.style.display = 'none';
    }
}
function profile(){
    let m = document.getElementsByClassName('merch')[0];
let h = document.getElementsByClassName('home')[0];
let p = document.getElementsByClassName('profile')[0];
    if(p.style.display === 'none'){
    p.style.display = 'block';
    m.style.display = 'none';
    h.style.display = 'none';
}else {
    p.style.display = 'none';
}
}
    
   

function NavBar(){
    
    return(
        <div className = "navBar">
            <div>
        <h5>SpottApp</h5>
            </div>
            <div>
        <ul>
            <button onClick = {showHome}>Home</button>
            <button onClick = {merch}>Merch</button>
            <button onClick = {profile}>Profile</button>
        </ul> 
            </div>
        </div>
    );
}
export default NavBar;