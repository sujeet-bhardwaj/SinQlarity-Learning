// visual clock
const now = new Date();

const hrs=document.querySelector("#hrs")
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
 console.log(hrs)
hrs.innerText=now.getHours()
min.innerText=now.getMinutes()
sec.innerText=now.getSeconds()







// alarm set 
const alarmtime=document.querySelector('#alarmtime')
const alarmbtn=document.querySelector('.alarm')
const statusid=document.querySelector('#status')
console.log(alarmtime)
alarmbtn.addEventListener("click",()=>{
let alarmInput = alarmtime.value;
if(!alarmInput){
     alert("set alarm first");
     return ;
}
    let now = new Date();
    console.log(typeof now)
    let [hours, minutes] = alarmInput.split(":").map(Number);    
    let alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
   
   console.log(typeof alarmTime)
    if (alarmTime <= now) {
        alarmTime.setDate(alarmTime.getDate() + 1); 
       
    }
    let timeToAlarm = alarmTime - now;
    console.log(timeToAlarm)
    console.log(typeof timeToAlarm )
   statusid.innerText = "Alarm set!";
    setTimeout(() => {
        alert("Alarm ringing");
        statusid.innerText = "Alarm finished.";
    }, timeToAlarm);
})


// StopWatch set 
const display=document.querySelector("#display");
const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const reset=document.querySelector('.reset')
 let seconds = 0;
  let minutes = 0;
  let hours = 0;
let time;
 function  updatedisplay(){
 let hrs=hours<10?"0"+hours:hours
  let mints=minutes<10?"0"+minutes:minutes
  let sec=seconds<10?"0"+seconds:seconds
  display.innerText=`${hrs}:${mints}:${sec}`
 }
start.addEventListener("click",()=>{
     if(!time){
 time=setInterval(()=>{
     seconds++;
     // console.log(seconds)
    if(seconds === 60){
     seconds=0;
     minutes++;
     console.log("minutes",minutes);
    }
    if(minutes === 60){
     minutes=0;
     hours++;
    }
    updatedisplay()
  },1000)

     }
})

stop.addEventListener("click",()=>{   
clearInterval(time);
time=null;
})
reset.addEventListener("click",()=>{
    clearInterval(time);
    seconds=0;
    minutes=0;
    hours=0;
updatedisplay();
})
