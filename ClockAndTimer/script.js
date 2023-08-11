
var hora =10;  //VARIAVEL PARA VERIFICAR AS MUDANÇAS >= 18
var minuto=10;
var segundo=10;
var diaOuNoite = "";
setInterval(() => {
    (()=>{
        //verificar por fora do setInterval
        clima = hora >= 18 ? './images/lua_drag.png' : './images/sol_drag.png'
        estacao = hora >= 18 ? './images/noite.jpg' : './images/dia.jpg'
        const fundo = document.querySelector('body');
        fundo.style.backgroundImage = `url("${estacao}")`
        const image = document.getElementById('imagem')
        image.src = clima
    })()
    segundo++;
    if(segundo>59){
        minuto++;
        segundo = 0;
    }else if(minuto > 59){
        segundo=0;
        minuto=0;
        hora++;
        
    }else if(hora > 23){   
        hora = 0;
    }
    diaOuNoite = hora > 12 ? "PM" : "AM" //CORRIGIR OS CICLOS
    document.getElementById('relogio').innerHTML = `${hora} : ${minuto} : ${segundo} ${diaOuNoite}`
}, 1000);

function resetar() {
    hora = `00`;
    minuto =`00`;
    segundo = `00`;
}
function saveTime() {
    
    const Salvo = document.getElementById('salvos');
    const novoTempo = document.createElement('p');
    novoTempo.textContent = `Salvo: ${hora}:${minuto}:${segundo} ${diaOuNoite}`
    Salvo.appendChild(novoTempo);
}
function modificar() {
    const sessao = document.getElementById('entrar')
    sessao.style.position = "absolute"
    sessao.style.top = "0"
    sessao.style.left = "50%"

    const entradas = document.createElement('input')
    entradas.type = "time"
    sessao.appendChild(entradas)
    const botao = document.createElement('button')
    botao.innerText = "Enviar"
    botao.addEventListener('click',() =>{
        const horario = entradas.value;
        [hora, minuto] = horario.split(':')
        document.getElementById('relogio').innerHTML = `${hora} : ${minuto} : ${segundo} ${diaOuNoite}`
    })

    sessao.appendChild(botao)
}