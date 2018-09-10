$(document).ready(function(){
    $('.scroll_to, .scroll_to_2').click( function(){ 
        if ($('.main').length != 0) { 
	    $('body').animate({ scrollLeft: $('.second').offset().left },500); 
        }
	    return false; 
    });
});