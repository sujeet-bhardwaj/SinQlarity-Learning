// // visual clock
const hrs=document.querySelector("#hrs")
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
const set=document.querySelector('.setHour')
const AM=document.querySelector('.AM')
console.log(set.innerText)
console.log(typeof set.innerText)
 console.log(hrs)
 let secondtime;
 let thirdtime;
 let fourthtime;
 firsttime=setInterval(() => {
    let now = new Date();
    hrs.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}, 1000);

set.addEventListener("click",()=>{
   let now = new Date();
  let thr=now.getHours();
//   console.log(thr)
if(set.innerText=="12hour") {
     if(thr>=12){
     clearInterval(firsttime);
     clearInterval(thirdtime);
   secondtime=setInterval(() => {
     now = new Date();
    hrs.innerText =now.getHours()-12;
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
     AM.style.display = "block"; 
     AM.innerText="PM"
    set.innerText="24hour"
}, 1000);
}
    else{
         clearInterval(firsttime);
     clearInterval(thirdtime);
    clearInterval(secondtime)
fourthtime=setInterval(()=>{
 let  now = new Date();
    hrs.innerText =now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
     AM.style.display = "block"; 
   AM.innerText="AM"
   set.innerText="24hour"
},1000) 
    }
}
else if(set.innerText=="24hour"){
    clearInterval(firsttime);
    clearInterval(secondtime);
    clearInterval(fourthtime)
 thirdtime=setInterval(() => {
    let now = new Date();
    hrs.innerText =now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
    AM.style.display = "none"; 
    set.innerText="12hour"
}, 1000);
}
})


// alarm set 
const alarmtime=document.querySelector('#alarmtime')
const alarmbtn=document.querySelector('.alarm')
const statusid=document.querySelector('#status')
const clearAlarmbtn=document.querySelector('.clearAlarmbtn');
const list=document.querySelector("#list");
const minutealarm=document.querySelector("#minutealarm");
const houralarm=document.querySelector("#houralarm");
const ampm=document.querySelector("#ampm")
const multipleAlarm=document.querySelector(".multipleAlarm")
let minutedata;
let hourdata;
let ampmdata;
let alarmid=[];
 console.log(alarmid.length)
// console.log(alarmtime)

console.log(statusid.innerText)
console.log(statusid.innerText)
alarmbtn.addEventListener("click",()=>{
 if((minutealarm.value !=="") && (houralarm.value!=="" )&& (ampm.value!== "")){
    console.log(ampm.value)
    ampmdata=ampm.value;
    multipleAlarm.style.display="block"
minutealarm.value=''
houralarm.value=''
const li = document.createElement("li");
const delBtn = document.createElement("button");
delBtn.innerText = "Delete"; 
delBtn.setAttribute("class", "myButton");

 hourdata=hourdata<10?"0"+`${hourdata}`:hourdata;
    minutedata=minutedata<10?"0"+`${minutedata}`:minutedata;
 
     li.append(`${hourdata}:${minutedata}${ampmdata}`, delBtn);
    list.append(li);    
    delBtn.addEventListener("click", () => {
        // if(alarmid.length==1){
        //      multipleAlarm.style.display="none"
        // }
          li.remove();
          clearInterval(id);
           if (document.querySelectorAll("li").length === 0) {
        multipleAlarm.style.display = "none";
    }       
    });
    let now = new Date();
hourdata=parseInt(hourdata)
minutedata=parseInt(minutedata)
if(ampmdata=="PM"){
 if(hourdata==12){
    hourdata=12
 }
else{
    hourdata=hourdata+12
}
}
// console.log(hourdata)
    let alarmTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hourdata,
    minutedata,
    0
);
// console.log(alarmTime) 
    if (alarmTime <= now) {
        alarmTime.setDate(alarmTime.getDate() + 1); 
    }
      let timeToAlarm = alarmTime - now;

       let id=setTimeout(() => {
        alert("Alarm ringing");
        statusid.innerText = "Alarm finished.";
    }, timeToAlarm);
     alarmid.push(id);  
   
   statusid.innerText = "Alarm set!";    
    //   console.log(alarmid)
}
else{
     statusid.innerText = ""; 
}

})
// multiple alarm set
minutealarm.addEventListener("input",()=>{
    if(statusid.innerText.trim()!=""){
    statusid.innerText=""
 }
    if(minutealarm.value>=60){
        alert("value should be  between 0 to 59")
          minutealarm.value=""
    }
    else{
  minutedata=minutealarm.value
    }
})
houralarm.addEventListener("input",()=>{
     if(statusid.innerText.trim()!==""){
    statusid.innerText=""
 }
    if(houralarm.value>=13){
        alert("value should be  between 1 to 12")
          houralarm.value=""
    }
    else{
  hourdata=houralarm.value
    }
})
ampm.addEventListener("click",()=>{
   ampmdata=ampm.value
})


// end multiple alarm
// StopWatch set 
const display=document.querySelector("#display");
const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const reset=document.querySelector('.reset')
  let millisecond=0;
 let seconds = 0;
  let minutes = 0;
  let hours = 0;
let time;
 function  updatedisplay(){
 let milli=millisecond<10?"0"+millisecond:millisecond
  let mints=minutes<10?"0"+minutes:minutes
  let sec=seconds<10?"0"+seconds:seconds
  display.innerText=`${mints}:${sec}:${milli}`
 }
start.addEventListener("click",()=>{
     if(!time){
 time= setInterval(()=>{
       millisecond+=10;
    if(millisecond==1000){
        seconds++;
        millisecond=0;
         console.log("first second")
    }
    if(seconds==60){
         minutes=1;
         seconds=0;
         console.log("first minute")
    }
   updatedisplay();
   },10)
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
    millisecond=0;
updatedisplay();
})


// timer set 
const minutesInput=document.querySelector("#minutes-input");
const tstart=document.querySelector('.tstart')
const tstop=document.querySelector('.tstop')
const treset=document.querySelector('.treset')
const tmin=document.querySelector('#tmin')
const tsec=document.querySelector('#tsec')
let id;
// let now =new Date()
// let millisecond=0;
// console.log(millisecond)
// let tsecond=0;
// let tminutes=0;
// tstart.addEventListener("click",()=>{
//    setInterval(()=>{
//        millisecond+=10;
//     if(millisecond==1000){
//         tsecond++;
//         millisecond=0;
//          console.log("first second")
//     }
//     if(tsecond==60){
//          tminutes=1;
//          tsecond=0;
//          console.log("first minute")
//     }
//    },10)
// })


// minutesInput.addEventListener("change",()=>{
//      if(parseInt(tmin.innerText)==0){
//         let data=minutesInput.value
//     tmin.innerText=`${data}`;
//         }
//        let data=minutesInput.value
//     tmin.innerText=`${data}`;
// })

minutesInput.addEventListener("input",(event)=>{   
       let data=event.target.value
    console.log(data)     
   tmin.innerText=`${data}`;   
     
})


tstart.addEventListener("click",()=>{
     minutesInput.disabled="true";  
      clearInterval(id);
     if(parseInt(tmin.innerText) !== 0 || parseInt(tsec.innerText) !== 0){
    minutesInput.value="";
    id=setInterval(()=>{
         tsec.innerText=parseInt(tsec.innerText)-1;
     if(parseInt(tsec.innerText)<0){
        tsec.innerText=59;
        tmin.innerText=parseInt(tmin.innerText)-1;
     }
       if (parseInt(tmin.innerText) == 0 && parseInt(tsec.innerText) == 0) {
        alert("Completed TimeInterval")
            clearInterval(id);
            tmin.innerText = "00";
            tsec.innerText = "00";
        }   
    },1000);
}
})
tstop.addEventListener("click",()=>{
      clearInterval(id);
})
treset.addEventListener("click",()=>{
    
   minutesInput.disabled = false;
  clearInterval(id);
tmin.innerText="00"
tsec.innerText="00"
})
















