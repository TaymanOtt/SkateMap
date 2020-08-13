export function close(){
    let m = document.getElementsByClassName('merch')[0];
    let h = document.getElementsByClassName('home')[0];
    let p = document.getElementsByClassName('profile')[0];
    h.style.display = 'none';
    p.style.display = 'none';
    m.style.display = 'none';
}