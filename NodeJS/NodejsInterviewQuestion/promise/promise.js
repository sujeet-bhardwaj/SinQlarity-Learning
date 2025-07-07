function fun1(){
  return "function1";
}

function fun2(){
  return new Promise((res,rej)=>{
     rej("Promise is rejected")
    setTimeout(()=>{
       console.log("now calling");
       res("function 2");
    },1000);

  })

}
function fun3(){
 return "fun3"
}



console.log(fun1());

fun2()
.then(res=>{
    console.log(res)
    const res3=fun3()
console.log(res3)
}).catch(err=>{
    console.log(err)
})
