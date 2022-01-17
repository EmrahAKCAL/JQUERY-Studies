$(document).ready(function(){

    //Bir fonksiyon kullanımı
    $('.btn-1').click(function(){
        $('div').animate({
            height: '300px',
            width: '300px',
            marginLeft: '800px',
            
        });
    });

    //Birden fazla fonksiyon kullanımı
    $('.btn-2').click(function(){
        $('div').animate(
            {
            height: '300px',
            width: '300px',
            marginLeft: '200px',

        },
        3000,
        function(){
            $('div').text('Sıkı tutun');
        },
       );
       $('div').animate(
           {
               fontSize: '30px',
               marginTop: '200px'
               
           }, 2000,
       );
       $('div').animate(
        {
            fontSize: '60px',
            marginLeft: '0px'
            
        }, 2000,
        
    ),
    $('div').animate(
        {
            marginLeft: '600px'
            
        },
        function(){
            $('div').text('Geçmiş Olsun :)');
        }
        
    )
    });

});