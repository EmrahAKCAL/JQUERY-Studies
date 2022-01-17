<h1>jQuery Olay Yöntemleri</h1>
Bir butona tıkladığımızda ya da seçtiğimiz herhangi bir paragraf veya div etiketine/etiketlerine tıkladığımız anda belli olaylar icraa etmek için click event özelliği kullanılır.<br>
Sayfa üzerindeki her şeyin yüklendiğinden emin olmak için<br><br>
<b><i>$(document).ready(function(){</b><br>
//Jquery kod bloğu<br>
  <b>});</i></b><br>
  <br> kullanılır. Bu doküman fonksiyonu kullanılmadığında jquery kodlarımız çalışmayacaktır.<br>
  <h3>Tıklama Etkinliği(click event)</h3>
  <b><i>$(document).ready(function(){<br>
  $('selector').click(function(){</b><br>
  //Jquery kod bloğu<br>
  <b>});<br>
  });</i></b><br>
  Burada ilgili element(selector) click olayı gerçekleştiğinde gerçekleşecek olaylar tanımlanılır.<br>
  Eğer birden fazla elemente aynı özelliği vermek istiyorsak ve elementler aynı anda tetiklemesini istemiyorsak aşağıdaki gibi selector kısmını <b><i>$(this)</i></b> şeklinde tanımlamamız gerekir.<br>
  <b><i>$(document).ready(function(){<br>
  $('selector').click(function(){><br>
  $(this).toggleClass('highLight');<br>
  });<br>
  });</i></b><br>
  <b><i>$(this)</i></b> O anki elementin etiketini temsil eder. Eğer <b>this</b> yerine aynı selector kullanırsak ilgili elemente tıklarsak jquery kodu aynı etiketteki tüm elementlere uygulanır.
