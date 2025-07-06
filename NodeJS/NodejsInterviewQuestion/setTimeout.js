let a=0;
let b=0;
function add(n1,n2){
 console.log(n1+n2);
}
setImmediate(()=>{
    add(a,b)
})
// callback register with check queue for next cycle 

setTimeout(()=>{
    add(5,5)
},0)

// callback register with timer queue for next cycle 
add(3,5)