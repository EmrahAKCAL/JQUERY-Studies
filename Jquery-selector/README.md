<h1>Jquery Selector(Seçiciler)</h1>
jQuery seçicileri, HTML öğelerini seçmenize ve değiştirmenize olanak tanır. jQuery seçicileri, adlarına, kimliklerine, sınıflarına, türlerine, özelliklerine, öznitelik değerlerine ve çok daha fazlasına dayalı olarak HTML öğelerini "bulmak" (veya seçmek) için kullanılır.<br>
jQuery'deki tüm seçiciler dolar<b><i>$()</i></b> işareti ve parantez ile başlar.
<table>
  <thead>
    <tr>
      <th>Sözdizimi</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b><i>$('#etiket')</i></b></td>
      <td>id etiketlere ulaşmak için kullanılır</td>
    </tr>
    <tr>
      <td><b><i>$('.etiket')</i></b></td>
      <td>class etiketlere ulaşmak için kullanılır</td>
    </tr>
    <tr>
      <td><b><i>$('etiket')</i></b></td>
      <td>Geçerli HTML öğesini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("p.etiket")</i></b></td>
      <td>class="etiket" ile tüm < p> öğelerini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("p:first")</i></b></td>
      <td>İlk < p> öğesini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("ul li:first")</i></b></td>
      <td>İlk < ul> öğesinin ilk < li> öğesini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("ul li:first-child")</i></b></td>
      <td>Her < ul> öğesinin ilk < li> öğesini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("[href]")</i></b></td>
      <td>Href özniteliğindeki tüm öğeleri seçer</td>
    </tr>
    <tr>
      <td><b><i>$("a[target='_blank']")</i></b></td>
      <td>"_blank" değerine eşit bir hedef öznitelik değerine sahip tüm < a> öğelerini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("a[target!='_blank']")</i></b></td>
      <td>"_blank" değerine eşit OLMAYAN bir hedef öznitelik değerine sahip tüm < a> öğelerini seçer</td>
    </tr>
    <tr>
      <td><b><i>$(":button")</i></b></td>
      <td>type="button" öğesinin tüm < button> öğelerini ve < input> öğelerini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("tr:even")</i></b></td>
      <td>Tüm çift < tr> öğelerini seçer</td>
    </tr>
    <tr>
      <td><b><i>$("tr:odd")</i></b></td>
      <td>Tüm tek < tr> öğelerini seçer</td>
    </tr>
  </tbody>
</table>
  
