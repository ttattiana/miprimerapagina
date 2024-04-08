//alert("Hola este es mi Javascript");

/*let nombre = "Irma";
var nombre1 = "Tatiana";
const nombre2="Tatiana";

console.log(nombre)
console.log(nombre1)
console.log(nombre2)*/


let contenidoTitulo = "Acerca de la página";
let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

let textoTitulo =titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Acerca de la página"){
    titulo.innerHTML == "Otro";
}
else{
    console.log("No se cumple");
}


let nombre = "tatiana";
let ciudad="soacha";
let gusto ="chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto){
 let contenido = `Los animales, ${nombre} también llamados metazoos o miembros del reino animal (animalia), 
 son seres vivientes pluricelulares, dotados de movilidad propia y de un metabolismo ${ciudad}
 basado en la descomposición bioquímica de la materia orgánica${gusto} proveniente de otros seres vivos`;
return contenido;

}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);