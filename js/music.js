'use strict'

window.addEventListener('load', () => {
    
    var music = document.querySelector("#music");
    var audio = new Audio();
    audio.src="media/audio/prelude.mp3";
    var mute = false;

    //Play or stop music
    music.addEventListener('click', () => {
        if(!mute){
            music.src = "images/icons/volume.png";
            audio.play();
            mute = true;
        }else{
            music.src = "images/icons/mute.png";
            audio.pause();
            mute = false;
        }
    });
});
