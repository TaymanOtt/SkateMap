export function showHome(){
let m = 
document.getElementsByClassName('merch')[0];
let h = 
document.getElementsByClassName('home')[0];
let p = 
document.getElementsByClassName('key')[0];
    if(h.style.display === 'none'){
    h.style.display = 'block';
    m.style.display = 'none';
    p.style.display = 'none';
}else {
    h.style.display = 'none';
}
}