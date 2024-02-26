function generarPalabraAleatoria() {
    var longitud = Math.floor(Math.random() * 10) + 1; 
    var palabra = '';
    var letras = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < longitud; i++) {
        palabra += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return palabra;
}

function generarParrafoAleatorio() {
    var longitud = Math.floor(Math.random() * 51) + 50; 
    var parrafo = '';
    for (var i = 0; i < longitud; i++) {
        parrafo += generarPalabraAleatoria() + ' ';
    }
    return parrafo.trim(); 
}

for (var i = 0; i < 5; i++) {
    var parrafo = generarParrafoAleatorio();
    console.log('Párrafo ' + (i + 1) + ' (Tamaño: ' + parrafo.length + ' caracteres):');
    console.log(parrafo);
    console.log('');
}
