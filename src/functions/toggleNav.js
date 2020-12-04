
export function toggleNav(){
        
    let m = 
    document.getElementById('merchButton');
    let h = 
    document.getElementById('homeButton');
    let p = 
    document.getElementById('profileButton');
    
        
        if(h.style.display === 'none'){
        h.style.display = 'block';
        m.style.display = 'block';
        p.style.display = 'block';
    }else {
        h.style.display = 'none';
        m.style.display = 'none';
        p.style.display = 'none';
    }
    
}