'use strict'

window.addEventListener('load', () => {
    
    var music = document.querySelector("#music");
    var url = location.href.replace(location.origin,'');
    var audio = new Audio();
    var mute = false;
    var volume_img, mute_img;
    
    console.log(url);
    
    if(url.startsWith("index")){
        audio.src   = "media/audio/prelude.mp3";
        volume_img  = "images/icons/volume.png"
        mute_img    = "images/icons/mute.png"
    }
    else if(url.startsWith("noticias/n")){
        audio.src   = "../../media/audio/prelude.mp3";
        volume_img  = "../../images/icons/volume.png";
        mute_img    = "../../images/icons/mute.png";
    }
    else if(url.startsWith("noticias/2")){
        audio.src   = "../../../media/audio/prelude.mp3";
        volume_img  = "../../../images/icons/volume.png";
        mute_img    = "../../../images/icons/mute.png";
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
