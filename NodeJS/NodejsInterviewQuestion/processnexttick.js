let a=0;
let b=0;
function add(callback,n1,n2){
 console.log(callback," ",n1+n2);
}
setImmediate(()=>{
    add("setimmediate",a,b)
})
// callback register with check queue for next cycle 
setTimeout(()=>{
    add("settimeout",5,5)
},0)
// callback register with timer queue for next cycle 

process.nextTick(()=>{
    add("proceesnettick",3,7)
})
// it puts its callback at the front of the event queue
// executed after the code currently being executed ,but before IO events,or timers 

add("direct",3,5)