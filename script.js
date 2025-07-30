
const elDay = document.getElementById('days');
const elHour = document.getElementById('hours');
const elMin = document.getElementById('mins');
const elSec = document.getElementById('seconds');

const birthdate = "6 Oct 2026";

function setFormat(num){
  if(num<10){
    return "0"+num
  }else{
    return num
  }
}

function countdown() {
    
    const newBithDate = new Date(birthdate);
    
    const currentDate = new Date();
    
    const _seconds = Math.floor((newBithDate - currentDate)/1000);
    
    const seconds = (_seconds % 60); // seconds
    
    const minutes = Math.floor((_seconds /60 )%60); // minutes
    
    const hours = Math.floor((_seconds / 3600) % 24); // hours
    
    const days = Math.floor((((_seconds/ 3600 ) / 24 ))); // days
    
    elDay.innerHTML = setFormat(days);
    elHour.innerHTML = setFormat(hours);
    elMin.innerHTML = setFormat(minutes);
    elSec.innerHTML = setFormat(seconds);    
   
}


countdown();

setInterval(countdown, 1000);