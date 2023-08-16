const carro = document.querySelector('.carro')
const pipe = document.querySelector('.pipe')

// const loop = setInterval(() => {
//     const pipePosition = pipe.offsetLeft;
//     const carroPositon = +window.getComputedStyle(carro).bottom.replace("px","")
//     console.log(carroPositon);
//     if(pipePosition <= 250 && pipePosition > 0 && carroPositon < 250){
//         pipe.style.animation = "none"
//         pipe.style.left = `${pipePosition}px`
//     }
  
// }, 10);
const random = setInterval(() =>{
    Math.random() * ((2 - 1) + 1).toFixed(0)//return printando 1 ou 2
})
const loopEnemy = setInterval( () => {
    criarInimigo()
    clearInterval(loopEnemy)
}, 5000);
function  criarInimigo () {
    const gameBoard = document.querySelector('.game-board');
    const pipeEnemy = document.createElement('img');
    pipeEnemy.src = "./image/bola.gif"
    pipeEnemy.style.width = "200px"
    pipeEnemy.style.height = "200px"
    pipeEnemy.style.paddingBottom = "25px"
    pipeEnemy.style.position = 'absolute'

    
    console.log(random);
    if(random <= 1){
        pipeEnemy.style.bottom = `${250}px`
    }else if(random > 1){
        pipeEnemy.style.bottom = `${0}px`
    }
    pipeEnemy.style.right = "200px"
    pipeEnemy.classList = 'pipe'


    const inter = setInterval(() => {
        if(gameBoard.lastChild == pipeEnemy){
            gameBoard.removeChild(pipeEnemy)
            console.log('removido');
        }else{
            gameBoard.appendChild(pipeEnemy)
            console.log('criado');
        }
    }, 2000);
    
}



let coord = {
    x: carro.getBoundingClientRect().x
};
coord.x = 0;
const mover = (e) => {
    const positionBoneco = +window.getComputedStyle(carro).bottom.replace("px","")
    const botao = e.key
    if(botao == "w".toLocaleLowerCase() && positionBoneco < 250){
        coord.x = coord.x + 250;

        carro.classList.remove('jump-down')
        carro.classList.add('jump-up')


        carro.style.bottom = `${coord.x}px`
        //erro ao setar animation
    }else if(botao == "s".toLocaleLowerCase() && positionBoneco > 0){
        coord.x = coord.x - 250;

        carro.classList.remove('jump-up')
        carro.classList.add('jump-down')

        carro.style.bottom = `${coord.x}px`

    }
}
document.addEventListener('keydown', mover);