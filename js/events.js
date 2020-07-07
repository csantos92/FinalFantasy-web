'use strict'

window.addEventListener('load', () => {
    var cloud = document.querySelector("#cloud");

    function changesize(){
    
        if(cloud.style.transform === "scale(1)"){
            cloud.style.transform = "scale(1.7)";
        }else{
            cloud.style.transform = "scale(1)";
        }
    }
    
    cloud.addEventListener('click', function(){
        changesize();
    });
    
    cloud.addEventListener('mouseover', function(){
        cloud.style.transform = "scale(1.7)";
    });
    
    cloud.addEventListener('mouseout', function(){
        cloud.style.transform = "scale(1)";
    });
});

