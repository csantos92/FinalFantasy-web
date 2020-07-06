'use strict'


//Se pueden usar estos dos tipos (con query se puede elegir clase, id, etiquetas...)

//Por id
var creditos = document.getElementById("credits");

//Por id, clase, etiqueta... Solo 1 elemento
//var creditos = document.querySelector("#credits");

//QuerySelector con array de elementos

var creditos = document.querySelectorAll(".clase");

//Por etiqueta - Crea un array con toda la información
var prueba = document.getElementsByTagName("article");

//Array de clases
var prueba = document.getElementsByClassName("clase");

//var contenido = prueba[0].textContent; //Solo muestra el text
var contenido = prueba[0].innerHTML; //Permite cambiar el texto

console.log(contenido);

//creditos.innerHTML = "Créditos de la página";
//creditos.style.background = "red";

//Crear una etiqueta

var hr = document.createElement("hr");
//creditos.appendChild(hr);
