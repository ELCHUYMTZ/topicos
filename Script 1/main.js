function generarColorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (var i = 0; i < 10; i++) {
    var contenedor = document.createElement('div');
    contenedor.style.width = '100px';
    contenedor.style.height = '100px';
    contenedor.style.backgroundColor = generarColorAleatorio();
    document.body.appendChild(contenedor);
}
