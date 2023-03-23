const cl = console.log;

const digitalClock = document.getElementById(`digitalClock`);


function setZero(val){
  if(val < 10){
    return "0"+ val
  }
  else{
    return val
  };
}


function createDigitalClock(){
let date = new  Date()
cl(date)
let hr = date.getHours()
cl(hr);
let min = date.getMinutes();
cl(min)
let sec = date.getSeconds();
cl(sec);
let session = "am"
if(hr >= 12){
  session = "pm"
};
if(hr > 12){
  hr = hr-12
};
// if (hr < 10){
//   hr= "0"+hr
// };
// if (min < 10){
//   min= "0"+min
// };
// if (sec < 10){
//   sec= "0"+sec
// };
let result = `${setZero(hr)}:${setZero(min)}:${setZero(sec)} ${session} `
// cl(hr,min,sec)
digitalClock.innerHTML= result
setTimeout(createDigitalClock  ,1000)
}

createDigitalClock()















