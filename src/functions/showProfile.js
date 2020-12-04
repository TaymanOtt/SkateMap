export function profile(){
    let m = document.getElementsByClassName('merch')[0];
let h = document.getElementsByClassName('home')[0];
let p = document.getElementsByClassName('key')[0];
    if(p.style.display === 'none'){
    p.style.display = 'block';
    m.style.display = 'none';
    h.style.display = 'none';
}else {
    p.style.display = 'none';
}
}