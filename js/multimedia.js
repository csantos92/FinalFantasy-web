'use strict'

window.addEventListener('load', () => {

    var play = document.querySelector('#play');
    var previous = document.querySelector('#previous');
    var next = document.querySelector('#next');
    var song = document.querySelector('#song-title p');
    var pause = false;
    var audio = new Audio();
    var playlist = new Array('../media/audio/tifa.mp3', '../media/audio/aerith.mp3', '../media/audio/jessie.mp3');
    var titles = new Array("Tifa's Theme - Seventh Heaven", "Aerith's Theme - Home Again", "Jessie's Theme - Masashi Hamauzu");
    var track = 0;

    audio.src = playlist[track];

    //Music controllers
    play.addEventListener('click', () => {
        if(!pause){
            play.src = "../media/images/icons/pause.png";
            showTitle();
            audio.play();
            pause = true;
        }else{
            play.src = "../media/images/icons/play.png";
            hideTitle();
            audio.pause();
            audio.ended
            pause = false;
        }
    });

    previous.addEventListener('click', () => {
        if(pause){
            if(track == 0){
                track = 2;
                audio.src = playlist[track];
                showTitle();
                audio.play();
            }else{
                track -= 1;
                audio.src = playlist[track];
                showTitle();
                audio.play();
            }
        }
    });

    next.addEventListener('click', () => {
        if(pause){
            if(track == 2){
                track = 0;
                audio.src = playlist[track];
                showTitle();
                audio.play();
            }else{
                track += 1;
                audio.src = playlist[track];
                showTitle();
                audio.play();
            }
        }
    });

    function showTitle(){
        song.innerHTML = titles[track];
        song.style.display = "block";
    }

    function hideTitle(){
        song.style.display = "none";
    }
});