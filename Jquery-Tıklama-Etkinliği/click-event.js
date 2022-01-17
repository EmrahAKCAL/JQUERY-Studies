$(document).ready(function(){
    
    //alert box  use
    $('#p1').click(function(){
        alert(`Hello Jquery Family!`);
    });

    //css() method  use
    $('.p2').click(function(){
        $(this).css({
            wordSpacing: '5px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'orange'
        });
    });

    //text() method  use
    $('.txt').click(function(){
        $(this).text('Hello Jquery Family. Click Event Enabled.');
    });

    //addClass() method  use
    $('.p-paragraph').click(function(){
        $(this).addClass('paragraph');
    });

    //removeClass() method  use
    $('.green').click(function(){
        $(this).removeClass('green');
    });

    //toggleClass() method  use
    $('.toggle').click(function(){
        $(this).toggleClass('highLight');
    });
});