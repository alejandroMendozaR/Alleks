$(document).ready(function(){
    var alturaMenu = $('#navbar').height();

    $(window).on('scroll', function(){
        if($(window).scrollTop() > alturaMenu * 0.7){
            $('#navbar').addClass('navbarFixed');
            $('#banner').addClass('scrolled');
            $('.loginBtn').addClass('loginScrolled');
            if($(window).scrollTop() > alturaMenu  * 0.7){
                $('.navbarFixed').css('transition', '0.5s');
            }
        }else{
            $('#navbar').removeClass('navbarFixed');
            $('#banner').removeClass('scrolled');
            $('#navbar').css('transition', '');
            $('.loginBtn').removeClass('loginScrolled');
        }
    });
});