export function merch(){
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