    function waktu() {
        var tanggal = new Date();
        setTimeout("waktu()",1000);
        document.getElementById("jam").innerHTML = tanggal.getHours();
        document.getElementById("menit").innerHTML = tanggal.getMinutes();
        document.getElementById("detik").innerHTML = tanggal.getSeconds();
    }

    function Klik(){
    	alert ("Ini Javascript")
    }
    
    function cari(){
  var kata = document.formcari.keyword.value;
  var hasil ="http://www.google.com/search?q="+kata;
  window.open(hasil,'google',config='height=500, width=700,scrollbars=yes location=yes')
}