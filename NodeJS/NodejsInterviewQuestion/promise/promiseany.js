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
    },2000) 
   })
}

function function3(){
   return new Promise((res,rej)=>{
       setTimeout(()=>{
       res("function 3")
    },500) 
   })
}

// function1().then((res)=>{
//     console.log(res)
// })
// function2().then((res)=>{
//     console.log(res)
// })
// function3().then((res)=>{
//     console.log(res)
// })


Promise.any([function1(),function2(),function3()]).then((res)=>{
    console.log(res)
})