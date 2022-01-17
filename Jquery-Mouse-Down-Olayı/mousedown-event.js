$(document).ready(function(){

    //mousedown() event use
   $('button').mousedown(function(){
    $(this).addClass('highLight');
    alert(`Hello Jquery Family!`);
    });
});