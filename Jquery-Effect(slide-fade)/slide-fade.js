$(document).ready(function(){

    //fadeOut() effect use
    $('.fade-out').click(function(){
        $('#box-1').fadeOut(1000);
        $('#box-2').fadeOut(2000);
        $('#box-3').fadeOut(3000);
    });

    //fadeIn() effect use
    $('.fade-in').click(function(){
        $('#box-1').fadeIn(1000);
        $('#box-2').fadeIn(2000);
        $('#box-3').fadeIn(3000);
    });

    //fadeToggle() effect use
    $('.fade-toggle').click(function(){
        $('#box-1').fadeToggle(1000);
        $('#box-2').fadeToggle(2000);
        $('#box-3').fadeToggle(3000);
    });

    //fadeTo() effect use
    $('.fade-to').click(function(){
        $('#box-1').fadeTo(2000, 0);
        $('#box-2').fadeTo(2000,0.4);
        $('#box-3').fadeTo(2000,0.7);
    });

    //slideUp() effect use
    $('.slide-up').click(function(){
        $('#box-1').slideUp(1000);
        $('#box-2').slideUp(2000);
        $('#box-3').slideUp(3000);
    })

    //slideDown() effect use
    $('.slide-down').click(function(){
        $('#box-1').slideDown(1000);
        $('#box-2').slideDown(2000);
        $('#box-3').slideDown(3000);
    });

    //slideToggle() effect use
    $('.slide-toggle').click(function(){
        $('#box-1').slideToggle(1000);
        $('#box-2').slideToggle(2000);
        $('#box-3').slideToggle(3000);
    });






});