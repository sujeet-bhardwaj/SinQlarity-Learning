     function multiply(num){
     return new Promise((resolve,reject)=>{
        resolve(num*2)
     })
  }

async function awaitExample() {
    const result=await multiply(2);
    const result2=await multiply(result);
    const result3=await multiply(result2);
 const result4=await multiply(result3); 
 console.log(result4)
}

awaitExample().catch((err)=>console.log(err))