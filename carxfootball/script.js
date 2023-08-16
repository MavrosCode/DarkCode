const carro = document.querySelector('.carro')
const bola1 = document.querySelector('.bola')

const random = function (){
    Math.random() * ((2 - 1) + 1).toFixed(0)//return printando 1 ou 2
}

let coord = {
    x: carro.getBoundingClientRect().x
};
function killEnemy() {
    const gameBoard = document.querySelector(".game-board")
    const bola = document.querySelector('.pipe')
    if(bola.style.right <= `${250}px`){
        console.log("morangos");
    }
}















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