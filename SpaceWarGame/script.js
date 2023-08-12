const nave = document.querySelector('.nave');


const loop = setInterval (() =>{
    //const navePosition = window.getComputedStyle(nave).right
    //console.log(navePosition)
},500)

let coord = {
    x: nave.getBoundingClientRect().x,
    y: nave.getBoundingClientRect().y
};
console.log(coord);

function LimitesDoMapa() {
    
    if(coord.y <= -5){
        coord.y = coord.y + 5;
        nave.style.left = `${coord.y}px`;
    }
    if(coord.y >= 300){
        coord.y = coord.y - 5;
        nave.style.left = `${coord.y}px`;
    }
    if(coord.x >= 268){
        coord.x = coord.x - 5
        nave.style.bottom = `${coord.x}px`;
    }
    if(coord.x <= 1){
        coord.x = coord.x + 5
        nave.style.bottom = `${coord.x}px`;
    }
    if(coord.x > 268){
        nave.style.bottom = `100px`;
    }
}


coord.x = 0;
coord.y = 150;
addEventListener('keypress', (e) =>{

    LimitesDoMapa()
    switch (e.key.toLowerCase()) {
        case 'w':
            coord.x = coord.x + 5;
            nave.style.bottom = `${coord.x}px`;
            break;

        case 'a':
 
            coord.y = coord.y - 5;
            nave.style.left = `${coord.y}px`;
            break;
        
        case 's':
         
            coord.x = coord.x - 5;
            nave.style.bottom = `${coord.x}px`;
            break;

        case 'd':
            coord.y = coord.y + 5;
            nave.style.left = `${coord.y}px`;
            break;

        case ' ':
            console.log('ESPACO');
            break;
        default:
            console.log(e.key);
            break;
    }
    console.log(`AAAAAAA ${coord.x}, ${coord.y}`)
})