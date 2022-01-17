$(document).ready(function(){

    //mouseenter() event use
   $('.mouse-leave').mouseleave(function(){
    $(this).addClass('highLight');
    alert(`Hello Jquery Family!`);
    });
});