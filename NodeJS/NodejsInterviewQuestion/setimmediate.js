// set immediate not immediate as its name

// its callback is place in the "check queqe" of the next cycle

// check queue,occurs later than timer queue
 


let a=1;
let b=2;

function add(n1,n2){
 console.log(n1+n2);
}
setImmediate(()=>{
    add(a,b)
})

console.log("enent happen");
