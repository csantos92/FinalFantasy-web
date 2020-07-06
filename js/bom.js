'use strict'

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location.href); //URL
console.log(screen.width);
console.log(screen.height);

//Redirigir a otra url
function redirect(url){
    window.location.href = url;
}

//Abre una pestaña nueva
function openWindow(url){
    window.open(url);
    window.open(url, "", "heigth=400,width=400");
}