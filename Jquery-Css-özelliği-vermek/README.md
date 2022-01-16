<h1> Jquery ile Css Özelliği Vermek</h1>
<b><i>$('</b>etiket<b>').css("</b>kod<b>", "</b>özellik<b>");</i></b> şeklinde css kodlarını kolayca jquery ile html sayfamıza aktarabiliriz.
<h3>Sadece Bir Özellik Vermek</h3>
<b><i>$('#container').css("color", "blue");</i></b> şeklinde kolayca id='container' olan elementin rengi değiştirilebiliriz.<br> Veya 
<b><i>$('.item').css("background", "yellow");</i></b>  class='item' olan elementin arkaplan rengini verebiliriz.<br>

<h3>Bir Elemente Birden Fazla Özellik Vermek</h3>
<b><i>$('li').css({</b><br>
    //kod bloğu <br>
  <b>});</i></b><br>
  şeklinde bir elemente birden fazla özellik verebiliriz. <br><br>
  Ya da <br><br>
 <b><i>var txtStyle= {</b><br>
  //Kod bloğu<br>
  <b>}</b><br>
  <b>$('a').css(txtStyle);</i></b><br> bir değişkenle tanımlayıp birden fazla elemente aynı özelliği verebiliriz.
