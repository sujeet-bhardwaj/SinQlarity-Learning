     function multiply(num){
     return new Promise((resolve,reject)=>{
        resolve(num*2)
     })
  }

multiply(4).then(multiply)
.then(multiply)
.then(multiply)
.then(multiply)
.then(result=>console.log(result))