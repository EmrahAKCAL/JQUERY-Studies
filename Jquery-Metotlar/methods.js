//css() method use

$('#container').css({
    color: 'red',
    listStyle: 'none'
});

//text() method use

$('#txt').text('Bu bir text değiştirme');

//attr() method use

console.log( $('#firstName').attr('type')); 


//html() method use

/*
console.log($('body').html('Bu Bir Html Sayfasını Değiştirme Metotudur.')); 

*/

function nameSave(){
    var name=$('#firstName').val(); //val() method use
    var surName=$('.lastName').val(); 
    console.log('Adınız: '+name, '\nSoyadınız: '+surName);
    
    
    //addClass() method use
   /*
    $('#firstName').addClass('highLight'); //özellik ekleme
*/
    //removeClass() method use
    $('.lastName').removeClass('green'); //varsayılan özelliği kaldırma

    //toggleClass() method use
    $('#firstName').toggleClass('highLight'); //özellik varsa siler, yoksa ekler

}


