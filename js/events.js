'use strict'

window.addEventListener('load', () => {
    var cloud = document.querySelectorAll("#cloud");

    var images = document.querySelectorAll(".tabla tr td img");

    for(var image of images){
        image.addEventListener('mouseover', function(event){
            this.style.transform = "scale(1.7)";
        });

        image.addEventListener('mouseout', function(){
            this.style.transform = "scale(1)";
        });

        image.addEventListener('click', function(event){
            window.open("../index.html", "winmame", 'width=600,height=480,toolbar=no,menubar=no,resizable=yes');
        });
    }
});

