'use strict'

$(document).ready(function(){

    var images  = $('.ff-table tr td img');
    var div     = $('#show-video:hidden');
    var text    = $('#show-video h3');
    var video   = $('#show-video iframe');
    var url, limit;

    function makeTransition(url, limit){
        if(div.is(":visible")){
            div.slideUp();
        }
        video.attr('src', url);
        text.html(limit);
        div.slideToggle(2000);
    }

    $(function(){

        images.click(function(){
            
            switch($(this).attr('alt')){
                case 'cloud':
                    url = "https://www.youtube.com/embed/KG0-4WC-LYo";
                    limit = "Límites de Cloud";
                    makeTransition(url, limit);

                    break;
                case 'barret':
                    url = "https://www.youtube.com/embed/834eAcq6cyM";
                    limit = "Límites de Barret";
                    makeTransition(url, limit);
                    
                    break;
                case 'tifa':
                    url = "https://www.youtube.com/embed/pfZyW2tHy6k";
                    limit = "Límites de Tifa";
                    makeTransition(url, limit);
                    
                    break;
                case 'aeris':
                    url = "https://www.youtube.com/embed/fRAOAlYzVk0";
                    limit = "Límites de Aeris";
                    makeTransition(url, limit);
                    
                    break;
                case 'redxiii':
                    url = "https://www.youtube.com/embed/KmHcbGrVgKE";
                    limit = "Límites de Red XIII";
                    makeTransition(url, limit);
                    
                    break;
                case 'cid':
                    url = "https://www.youtube.com/embed/7EjSCnX-lhk";
                    limit = "Límites de Cid";
                    makeTransition(url, limit);
                    
                    break;
                case 'cait':
                    url = "https://www.youtube.com/embed/WvRLWK6cNe0";
                    limit = "Límites de Cait Saith";
                    makeTransition(url, limit);
                    
                    break;
                case 'yuffie':
                    url = "https://www.youtube.com/embed/YOPv5S2kaAc";
                    limit = "Límites de Yuffie";
                    makeTransition(url, limit);
                    
                    break;
                case 'vincent':
                    url = "https://www.youtube.com/embed/wbALONXJnGM";
                    limit = "Límites de Vincent";
                    makeTransition(url, limit);
                    
                    break;
                default:
                    console.log('error');
            }
        });
    });

});