'use strict'

$(document).ready(function(){

    //Variables

    var cloud = $("#cloud");
    var barret = $("#barret");
    var tifa = $("#tifa");
    var aeris = $("#aeris");
    var div = $("#video-re");
    var video = $("#video-re iframe");
    var title = $("#video-re h3");
    var cloudOn, barretOn, tifaOn, aerisOn = false;
    var characters = [cloud, barret, tifa, aeris];
    var url, text;

    //Functions

    function showEffect(character, url, text){

        video.attr("src" ,url);
        title.html(text);

        for (const iterator of characters) {
            if(iterator !== character){
                iterator.fadeOut(2000);
            }
        }

        setTimeout(function(){
            div.fadeIn(1000);

        }, 2000);
    }

    function hideEffect(character){

        div.fadeOut(1000);

        setTimeout(function(){
            for (const iterator of characters) {
                if(iterator !== character){
                    iterator.fadeIn(2000);
                }
            }
        }, 1000);
    }

    //Logic

    $(function(){
        cloud.click(function(){

            if (!cloudOn){
                url = "https://www.youtube.com/embed/Zn-xa-0nyZE";
                text = "Final Fantasy VII Remake Main Theme";

                showEffect(cloud, url, text);
                cloudOn = true;
            }
            else{   
                hideEffect(cloud);
                cloudOn = false;
            }
        });

        barret.click(function(){

            if (!barretOn){
                url = "https://www.youtube.com/embed/lYpDBjSRe2M";
                text = "Barret's Theme";

                showEffect(barret, url, text);
                barretOn = true;
            }
            else{   
                hideEffect(barret);
                barretOn = false;
            }
        });

        tifa.click(function(){

            if (!tifaOn){
                url = "https://www.youtube.com/embed/NJ9n-Ryjx94";
                text = "Tifa's Theme";

                showEffect(tifa, url, text);
                tifaOn = true;
            }
            else{   
                hideEffect(tifa);
                tifaOn = false;
            }
        });

        aeris.click(function(){

            if (!aerisOn){
                url = "https://www.youtube.com/embed/qCrCp-NLXKs";
                text = "Aerith's Theme";

                showEffect(aeris, url, text);
                aerisOn = true;
            }
            else{   
                hideEffect(aeris);
                aerisOn = false;
            }
        });
    });
});