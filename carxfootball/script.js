const carro = document.querySelector('.carro')
const pipe = document.querySelector('.pipe')

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    //precisa pegar o top/bottom do pipe para comparar nos ifs
    const carroPositon = +window.getComputedStyle(carro).bottom.replace("px","")
    console.log(carroPositon);
    if(pipePosition <= 300 && pipePosition > 0 && carroPositon < 250 || pipePosition <= 300 && pipePosition > 0 && carroPositon > 0){
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`
    }
  
}, 100);


let coord = {
    x: carro.getBoundingClientRect().x
};
coord.x = 0

const jump = (e) =>{
    console.log(e.key);
    
    switch (e.key.toLocaleLowerCase()) {

        case 'w':
            if(coord.x < 250){
            carro.classList.add('jump-up')
            coord.x = coord.x + 250;
            carro.style.bottom = `${coord.x}px`;
            setTimeout(() => {
                carro.classList.remove('jump-up')
            }, 500);
          
            console.log(coord.x)
            break;
        }

        case 's':
            if(coord.x > 0){
            carro.classList.add('jump-down')
            coord.x = coord.x - 250;
            carro.style.bottom = `${coord.x}px`;
            setTimeout(() => {
                carro.classList.remove('jump-down')
            }, 500);
            
            console.log(coord.x)
            break;
        }

        default:
            break;
        }
    }







function barreira() {
    if(coord.x >= 251){
        return barreira()
    }
    if(coord.x <= -1){
        return barreira()
    }
}


document.addEventListener('keydown', jump );