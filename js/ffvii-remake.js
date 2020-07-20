'use strict'

$(document).ready(function(){

    //Variables

    var cloud = $("#cloud");
    var barret = $("#barret");
    var tifa = $("#tifa");
    var aeris = $("#aeris");
    var div = $("#video");
    var cloudOn, barretOn, tifaOn, aerisOn = false;
    var characters = [cloud, barret, tifa, aeris];

    //Functions

    function showEffect(character){

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
                showEffect(cloud);
                cloudOn = true;
            }
            else{   
                hideEffect(cloud);
                cloudOn = false;
            }
        });

        barret.click(function(){

            if (!barretOn){
                showEffect(barret);
                barretOn = true;
            }
            else{   
                hideEffect(barret);
                barretOn = false;
            }
        });

        tifa.click(function(){

            if (!tifaOn){
                showEffect(tifa);
                tifaOn = true;
            }
            else{   
                hideEffect(tifa);
                tifaOn = false;
            }
        });

        aeris.click(function(){

            if (!aerisOn){
                showEffect(aeris);
                aerisOn = true;
            }
            else{   
                hideEffect(aeris);
                aerisOn = false;
            }
        });
    });
});