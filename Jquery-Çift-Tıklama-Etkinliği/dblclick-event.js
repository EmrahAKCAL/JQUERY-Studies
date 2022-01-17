
$(document).ready(function(){

    //bir kez tıklama
    $('.btn-1').click(function(){
        $(this).addClass('paragraph');
    });

    //çift tıklama
    $('.btn-2').dblclick(function(){
        $(this).addClass('highLight');
        alert(`Hello Jquery Family!`);
    });

    //bir veya çift tıklama
    $('.btn-3').click(function(){
        $(this).text('Çift tıkla');
    });

    $('.btn-3').dblclick(function(){
        $(this).addClass('highLight')
    });
    
    $('div').css({
       borderStyle: 'double',
       margin: '10px',
       padding: '5px'
    });

    $('.btn').dblclick(function(){
        $('div').hide();
    });
});