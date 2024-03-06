let NumeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroIgual = false;
let numeroMaximo = 10;
let contadorPartidas;
let contadorJuegos = 0;
let maxJuegos = 0
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function cantidadJuegos() {
    maxJuegos = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById('Intentar').removeAttribute('disabled');
    condicionesIniciales2();
}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === NumeroSecreto) {
        asignarTextoElemento('p', (`Acertaste en solo ${intentos} ${intentos == 1 ? "vez" : "veces"}`))
        contadorJuegos++;
        document.getElementById('reiniciar').removeAttribute('disabled');
        contadorPartidas++;

    } else {
        intentos++;
        let guia = numeroDeUsuario > NumeroSecreto ? "El numero es menor" : "El numero es mayor"
        asignarTextoElemento('p', (`Intenta de nuevo, el numero secreto es ${guia}`))
        limpiarCaja()
    }
    return;
}
function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSectreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon la cantidad maxima de numeros');
        document.getElementById('Intentar').setAttribute('disabled', 'true')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSectreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales2() {
    if (maxJuegos > contadorJuegos) {
        asignarTextoElemento('h1', 'juego del numero secreto');

        asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`)

    
        NumeroSecreto = generarNumeroSectreto();
        intentos = 1;
        document.getElementById('Inicio').setAttribute('disabled', 'true')
    } else {

        document.getElementById('Intentar').setAttribute('disabled', 'true')
        asignarTextoElemento('p', `Haz jugado la cantidad maxima de juegos ${maxJuegos}, indica nueva cantidad`);
        document.getElementById('Inicio').removeAttribute('disabled')
    }
    limpiarCaja()
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}
function reiniciarJuego() {
    condicionesIniciales2();

}
function condicionesIniciales1() {
    asignarTextoElemento('h1', 'juego del numero secreto');

    asignarTextoElemento('p', `indica limite de juegos`);

}


condicionesIniciales1();



