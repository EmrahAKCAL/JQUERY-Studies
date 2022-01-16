//sadece bir özellik vermek

$('h3').css("color","blue"); //sadece bir özellik vermek
$('ul').css("list-style","none"); //ul elementindeki elemanların işaretleri kaldırıldı

$('#container').css("background","yellow"); //id='container' olan elemente arkaplan rengi verildi




$('.item').css("border","1px solid red"); //kenarlık ekleme


 
//Birden fazla özellik vermek

$('li').css({
    fontSize: '22px',
    letterSpacing: '3px',
    wordSpacing: '5px'
});

//Ya da bir değişkenle tanımlayıp birden fazla elemente aynı özelliği verebiliriz

var styleGroup={
   color: 'green',
   fontWeight: 'bold',
   lineHeight: '150%' //satır aralığı/yüksekliği
}

$('li').css(styleGroup);