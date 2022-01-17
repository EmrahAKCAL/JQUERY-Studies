<h1>Jquery'de Bir Elementi Gizleme Ve Göösterme</h1>
jQuery ile HTML öğelerini hide() ve show()yöntemleriyle gizleyebilir ve gösterebiliriz.<br><br>
$(document).ready(function(){  <br>
   <b><i>$('selector').click(function(){</i></b><br>
    $('p').show()        //p elementini göstemek<br>
    <b><i>}); </i></b><br>
    <b><i>$('selector').click(function(){</i></b><br>
    $('p').hide()        //p elementini gizler<br>
    <b><i>}); </i></b><br>
  }); <br><br>
  <b><i>Toggle:</b> Bu iki metot işlemelerini tek başına yapan metottur. toggle() şeklinde kullanılır.</i><br>
 Geçiş efektlerine  hide(3000) şeklinde geçiş süresi belirtilebilir.  Geçiş süresinin yerine <b> hide('slow')</b> veya <b>hide('fast')</b> şeklinde de geçiş süresi ayarlanabilir.<br>
 <b><i>NOT:</b> Buradaki 3000 sayısı 3 saniyeyi temsil etmektedir.</i><br>
 Bu geçiş efektinden sonra bir işlem gerçekleşmesini istiyorsak<br> 
 <b>show(3000, function(){</b><br><br>
 //kod bloğu<br><br>
 <b>});</b> <br> şeklinde fonksiyon belirtilebilir.
  
