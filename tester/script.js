let bebidas = 3
let valor = 0
switch(bebidas){
    case 1:'café'
    valor = 2.50
    console.log(`Café custa ${valor.toFixed(2)}`);
    break;

    case 2:'chá'
    valor = 4.00
    console.log(`chá custa ${valor.toFixed(2)}`);
    break;

    case 3:'leite'
    valor = 3.00
    console.log(`leite custa ${valor.toFixed(2)}`);
    break;

    default:
        console.log("Servimos apenas café,leite e chá!");
        break;
}
console.log("Obrigado pela preferência!")