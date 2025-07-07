function function1(){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
 res("function 1")
    },1000)   
   })
}


function function2(){
   return new Promise((res,rej)=>{
     setTimeout(()=>{
 res("function 2")
    },1000) 
   })
}

function function3(){
   return new Promise((res,rej)=>{
  setTimeout(()=>{
 rej("function 3")
    },1000) 
   })
}

Promise.allSettled([function1(),function2(),function3()]).then((result)=>{
    console.log(result)
})