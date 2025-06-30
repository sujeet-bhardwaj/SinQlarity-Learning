 function updateAge(age){
    
   return new Promise((resolve,reject)=>{
       if(age>0){
          age=age+1
          resolve(age)
       }       
      else{
        reject("Invalid age")
      }
   })

 } 

 updateAge(0).then((updatedage)=>{
console.log(updatedage);
 }).catch((Error)=>{
     console.log("Error message is :"+Error)
 })
