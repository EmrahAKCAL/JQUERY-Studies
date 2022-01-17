<h1> Jquery'de Animasyon Yapmak</h1>
jQuery'de özel animasyonlar oluşturmak için <b><i>animate()</i></b> metodu kullanılır.<br>
<b><i>$('button').click(function(){<br>
        $('div').animate( <br>
  {</b><br>
            //Birinci animasyon-3s
        <b>}, 3000, <br>
        function(){ <br>
           //kod bloğu <br>
        }, <br>
       ); <br>
       $('div').animate( <br>
           {</b> <br>
               //İkinci animasyon- 2s
           <b>}, 2000, <br>
       ); <br>});</b></i>
<br>
Şeklinde birden fazla animasyon gerçekleştirilebilir.<br>
<b><i>NOT:</b>Varsayılan olarak, tüm HTML öğelerinin statik bir konumu vardır ve taşınamaz.
Konumu değiştirmek için, önce öğenin CSS konum özelliğini göreli, sabit veya mutlak olarak ayarlamayı unutmayın! <b>position: absolute;</b> olarak ayarlayabiliriz.</i><br>
