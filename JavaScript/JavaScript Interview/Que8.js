   


   function hello(){
      // let data="hello world"
    return  function (){
          // console.log(`the value is ${data}`)
          return "hello world"
        }
      
   }

   let first=hello()
  let  second=first() 
  console.log(second)