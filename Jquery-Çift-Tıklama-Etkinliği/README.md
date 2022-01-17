<h1>jQuery Olay Yöntemleri</h1>
Bir butona tıkladığımızda ya da seçtiğimiz herhangi bir paragraf veya div etiketine/etiketlerine tıkladığımız anda belli olaylar icraa etmek için click event özelliği kullanılır.<br>
Sayfa üzerindeki her şeyin yüklendiğinden emin olmak için<br><br>
<b><i>$(document).ready(function(){</b><br>
//Jquery kod bloğu<br>
  <b>});</i></b><br>
  <br> kullanılır. Bu doküman fonksiyonu kullanılmadığında jquery kodlarımız çalışmayacaktır.<br>
  <h3>Çift Tıklama Etkinliği(dblclick event)</h3>
  <b><i>$(document).ready(function(){</b>       //Sayfanın dokümanını hazır hale getir<br>   
  <b>$('selector').dblclick(function(){</b>   //ilgili etikete çift tıklanıldığında<br>    
  <b>$(this).addClass('highLight'); </b>    //aynı etikete higLight classını ekle<br>        
  <b>});<br>
  });</i></b><br>
  <b><i>$(this)</i></b> O anki elementin etiketini temsil eder. Eğer <b>this</b> yerine aynı selector kullanırsak ilgili elemente tıklarsak jquery kodu aynı etiketteki tüm elementlere uygulanır.
