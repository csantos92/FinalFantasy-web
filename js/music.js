'use strict'

window.addEventListener('load', () => {
    
    var music = document.querySelector("#music");
    var url = location.href;
    var audio = new Audio();
    var mute = false;
    var volume_img, mute_img;

    if(url.endsWith("/index.html") || url.startsWith("/")){
        audio.src   = "media/audio/prelude.mp3";
        volume_img  = "media/images/icons/volume.png"
        mute_img    = "media/images/icons/mute.png"
    }
    else if(url.endsWith("news.html") || url.includes("games") || url.includes("multi") || url.includes("contact")){
        audio.src   = "../media/audio/prelude.mp3";
        volume_img  = "../media/images/icons/volume.png";
        mute_img    = "../media/images/icons/mute.png";
    }
    else if(url.includes("2020")){
        audio.src   = "../../../media/audio/prelude.mp3";
        volume_img  = "../../../media/images/icons/volume.png";
        mute_img    = "../../../media/images/icons/mute.png";
    }
    
    //Play or stop music
    music.addEventListener('click', () => {
        if(!mute){
            music.src = volume_img;
            audio.play();
            mute = true;
        }else{
            music.src = mute_img;
            audio.pause();
            mute = false;
        }
    });
});