//const opciones = ['piedra', 'papel', 'tijera'];
let puntosUsuario = 0;
let puntosPc = 0;
const boton = document.querySelectorAll('.boton-jugada');
const resultado = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorPc = document.getElementById('contador-ordenador');






boton.forEach(elemento => {

    elemento.addEventListener('click', juego)


});



function juego(e) {

    let seleccionPc = Math.floor(Math.random() * 3);
    //let seleccionUser = boton.dataset.data - jugada;
    let seleccionUser = e.currentTarget.getAttribute('data-jugada');
    console.log(seleccionPc);
    console.log(seleccionUser);

    if (seleccionPc === 0) {
        seleccionPc = 'piedra';
    } else if (seleccionPc === 1) {
        seleccionPc = 'papel';
    } else if (seleccionPc === 2) {
        seleccionPc = 'tijera';
    }

    if ((seleccionUser === 'piedra' && seleccionPc === 'tijera') ||
        (seleccionUser === 'tijera' && seleccionPc === 'papel') ||
        (seleccionUser === 'papel' && seleccionPc === 'piedra')
    ) {
        puntosUsuario++;
        contadorUsuario.innerText = `Tus puntos son: ${puntosUsuario}`;
    } else if ((seleccionPc === 'piedra' && seleccionUser === 'tijera') ||
        (seleccionPc === 'tijera' && seleccionUser === 'papel') ||
        (seleccionPc === 'papel' && seleccionUser === 'piedra')
    ) {
        puntosPc++;
        contadorPc.innerText = `Tus puntos son: ${puntosPc}`;
        reiniciar();

    } else {

        resultado.innerText = 'Empate';
    }

}

function reiniciar() {

    if (puntosUsuario === 5) {


        resultado.innerText = 'Ha ganado el Usuario';
        puntosPc = 0;
        puntosUsuario = 0;
    } else if (puntosPc === 5) {

        resultado.innerText = 'Ha ganado el Pc';
        puntosPc = 0;
        puntosUsuario = 0;

    }


}