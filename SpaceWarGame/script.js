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

    if(nave.style.bottom >= window.innerWidth) return console.log('erro')
    switch (e.key) {
        case 'w':
        case 'ArrowUp':
            console.log(e.key);
            coord.x = coord.x - 10;
            nave.style.top = `${coord.x}px`;
            break;


        case 'a':
        case 'ArrowLeft':
            console.log(e.key);
            coord.y = coord.y - 10;
            nave.style.left = `${coord.y}px`;
            break;
        
        case 's':
        case 'ArrowDown':
            console.log(e.key);
            coord.x = coord.x + 10;
            nave.style.bottom = `${coord.x}px`;
            break;


        case 'd':
        case 'ArrowRight':
            console.log(e.key);
            coord.y = coord.y + 10;
            nave.style.right = `${coord.y}px`;
            break;

        default:
            console.log(console.error('deu ruim'));
            break;
    }
})