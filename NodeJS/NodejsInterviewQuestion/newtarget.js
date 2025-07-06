 function demotarget(x){
      if(new.target === undefined){
        console.log("no")
      }
      else{
        this.x=x
         console.log("inside the function");
      }

   
 }

 demotarget()
 let x=new demotarget(4)
 console.log(x)