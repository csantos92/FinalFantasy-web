'use strict'

window.addEventListener('load', () => {
    var button = document.querySelector('#send');
    var span = document.querySelector('#show');


    button.addEventListener('click', (e) => {
        e.preventDefault();
        span.style.display = "block";
    });
});