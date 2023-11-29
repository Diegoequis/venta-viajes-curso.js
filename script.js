import { barcelona, roma, paris, londres} from './ciudades.js';

//Obtener elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

//Agregamos un evento a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //Remover Active de todos los enlaces    
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //Agregar clase Active al enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHtml = contenido.precio;
    });

});

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    };
    return contenido[enlace];
}