
var hora = 11;
var minuto = 58;
var segundo = 55;
var diaOuNoite = "";
setInterval(() => {
    segundo++;
    if(segundo>59){
        minuto++;
        segundo = 0;
    }else if(minuto > 59){
        minuto=0;
        hora++;
        segundo=0;
    }else if(hora >= 12){
        diaOuNoite = "PM"
    }else if(hora < 12){
        diaOuNoite = "AM"
    }
    document.getElementById('relogio').innerHTML = `${hora} : ${minuto} : ${segundo} ${diaOuNoite}`
}, 1000);


