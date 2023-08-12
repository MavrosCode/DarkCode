const nave = document.querySelector('.nave');


const loop = setInterval (() =>{
    const navePosition = window.getComputedStyle(nave).right
    console.log(navePosition)
},500)

let coord = {
    x: nave.getBoundingClientRect().x,
    y: nave.getBoundingClientRect().y
};

addEventListener('keypress', (e) =>{

    if(!coord.y >=210 || coord.y <= -10)return;
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            coord.x = coord.x - 5;
            nave.style.bottom = `${coord.x}px`;
            break;

        case 'a':
        case 'ArrowLeft':
 
            coord.y = coord.y - 5;
            nave.style.left = `${coord.y}px`;
            break;
        
        case 's':
        case 'ArrowDown':
            coord.x = coord.x + 5;
            nave.style.bottom = `${coord.x}px`;
            break;

        case 'd':
        case 'ArrowRight':
            coord.y = coord.y + 5;
            nave.style.left = `${coord.y}px`;
            break;

        default:
            break;
    }
    console.log(e.key);
})