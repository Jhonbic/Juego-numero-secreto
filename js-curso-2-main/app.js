let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora de la aventura';
function consoleClick(){
    alert('El boton fue clickeado')
}
function promptClick(){
    Ciudad = prompt('Dime una ciudad de Colombia');
    alert(`Yo estuve en la ciudad de ${Ciudad}`)
}
function alertClick(){
    alert('Yo amo JS')
}
function sumaClick(){
    let n1= parseInt(prompt('Digite numero 1'))
    let n2= parseInt(prompt('Digite numero 2'))
    let resultado= n1+n2;
    alert(`la suma es ${resultado}`)
}