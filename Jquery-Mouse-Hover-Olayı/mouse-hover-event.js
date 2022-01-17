$(document).ready(function(){

    //hover() event use
    $('button').hover(function(){
        $('p').text('Hello Jquery Family!');
    },
    function(){
        $('p').text('Good By!');
    });

});