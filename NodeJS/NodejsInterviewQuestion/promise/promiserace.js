const { Result } = require("postcss")

//   iterable
function function1(){
   return new Promise((res,rej)=>{
       setTimeout(()=>{
       res("function 1")
    },2000) 
   })
}

function function2(){
   return new Promise((res,rej)=>{
       setTimeout(()=>{
       res("function 2")
    },5000) 
   })
}

function function3(){
   return new Promise((res,rej)=>{
       setTimeout(()=>{
       rej("function 3")
    },1000) 
   })
}


Promise.race([function1(),function2(),function3()]).then((result)=>{
    console.log("success",result);
}).catch((err)=>{
  console.log("failed",err)
})