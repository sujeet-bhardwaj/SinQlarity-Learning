//   function multiply(num){
//     return num*2
//   }

//   const result=multiply(2);
//   console.log(result)



  function multiply(num,callback){
    callback(num*2)
  }

  multiply(2,(result)=>{
     multiply(result,(result)=>{
       multiply(result,(result)=>{
           multiply(result,(result)=>{
    console.log(result)
               })
           })
        })
  })