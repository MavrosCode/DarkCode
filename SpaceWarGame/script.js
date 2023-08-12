const nave = document.querySelector('.nave');


const loop = setInterval (() =>{
    //const navePosition = window.getComputedStyle(nave).right
    //console.log(navePosition)
    //verificar se o circulo bateu na nave
},500)
setInterval(() =>{
    criarInimigo()
    console.log('criadoo');

},300)

setInterval(()=>{ 
     const gameBoard = document.querySelector('.game-board');
     const getChild = document.querySelector('.inimigos')
     gameBoard.removeChild(getChild)
},4000)

function criarInimigo() {
    const gameBoard = document.querySelector('.game-board');
    const enemy = document.createElement('div');
    enemy.style.width = "10px"
    enemy.style.height = "10px"
    enemy.style.borderRadius = "50%"
    enemy.style.backgroundColor = "purple"
    enemy.style.position = 'absolute'
    enemy.style.top = `${Math.random() * (268 - 200) + 20}px`
    enemy.style.left = `${Math.random() * (300 - 5) + 20}px`
    enemy.classList = 'inimigos'
    gameBoard.appendChild(enemy)
}




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

let coord = {
    x: nave.getBoundingClientRect().x,
    y: nave.getBoundingClientRect().y
};
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
    console.log(`Posicoes: ${coord.x}, ${coord.y}`)
})