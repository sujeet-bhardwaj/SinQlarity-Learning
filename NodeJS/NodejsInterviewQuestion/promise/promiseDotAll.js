// multiple promise 
// wait ->to resolve the promises
// or to reject one 

function function1(){
   return new Promise((res,rej)=>{
    res("function 1")
   })
}

function function2(){
   return new Promise((res,rej)=>{
    res("function 2")
   })
}

function function3(){
   return new Promise((res,rej)=>{
    res("function 3")
   })
}

Promise.all([function1(),function2(),function3()]).then((result)=>{
  console.log(result)
}).catch((err)=>{
  console.log(err)
})