let first =prompt("Adınız nedir?");
let info=document.querySelector("#info");

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
 
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const gun = new Date();
  let day = weekday[gun.getDay()];


info.innerHTML=`
KODLUYORUZ <br>
Merhaba,${first}! Hoş geldin! <br>
${time}  ${day}
 <br> tarihinde Kodluyoruz Frontend Web Development Patikasının Javascript bölümü 1 . ödevindesiniz.
`
