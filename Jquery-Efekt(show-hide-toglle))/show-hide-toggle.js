$(document).ready(function(){
    $('.btnHide').click(function(){
        $('p').hide('slow', function(){
            alert('Paragraf gizlenildi. Göstermek için Show butonuna tıkla');
        });
    });
    $('.btnShow').click(function(){
        $('p').show('fast', function(){
            alert('Paragraf gösterildi. Gizlemek için Hide butonuna tıkla');
        });
    });
    $('.btnToggle').click(function(){
        $('p').toggle(3000,function(){
            alert('Toggle: hide ve show özelliklerini tek bir metotla yapmaktadır.');
        });
        
    });
});