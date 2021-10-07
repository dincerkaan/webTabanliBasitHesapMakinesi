function toplamaIslemi(birinciSayi,ikinciSayi)
{
 
    ilkDeger =  parseInt(document.getElementById("birinciSayi").value);
    ikinciDeger  =  parseInt(document.getElementById("ikinciSayi").value);

    document.getElementById("sonuc").innerHTML = ilkDeger + ikinciDeger;
   
}
   
function cikarmaIslemi(birinciSayi,ikinciSayi)
{
 
    ilkDeger =  parseInt(document.getElementById("birinciSayi").value);
    ikinciDeger  =  parseInt(document.getElementById("ikinciSayi").value);

    document.getElementById("sonuc").innerHTML = ilkDeger - ikinciDeger;
   
}
   
function carpmaIslemi(birinciSayi,ikinciSayi)
{
 
    ilkDeger =  parseInt(document.getElementById("birinciSayi").value);
    ikinciDeger  =  parseInt(document.getElementById("ikinciSayi").value);

    document.getElementById("sonuc").innerHTML = ilkDeger * ikinciDeger;
   
}
   
function bolmeIslemi(birinciSayi,ikinciSayi)
{
 
    ilkDeger =  parseInt(document.getElementById("birinciSayi").value);
    ikinciDeger  =  parseInt(document.getElementById("ikinciSayi").value);

    document.getElementById("sonuc").innerHTML = (ilkDeger / ikinciDeger).toFixed(2);
   
}