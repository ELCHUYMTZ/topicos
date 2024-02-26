var colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#4B0082', '#7CFC00', '#ADFF2F', '#FFD700', '#D2691E', '#8B4513'];
function obtenerColorAleatorio() {
    var indice = Math.floor(Math.random() * colores.length);
    var color = colores[indice];
    colores.splice(indice, 1); 
    return color;
}
for (var i = 0; i < 10; i++) {
    var contenedor = document.createElement('div');
    contenedor.style.width = '100px';
    contenedor.style.height = '100px';
    contenedor.style.backgroundColor = obtenerColorAleatorio();
    document.body.appendChild(contenedor);
}
