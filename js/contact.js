'use strict'

$(document).ready(function(){
    var show = $('#show');
    var form = $('#contact');

    form.submit(function(e) {
        e.preventDefault();
        show.fadeIn();
    });
});