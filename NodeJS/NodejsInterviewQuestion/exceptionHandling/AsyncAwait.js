async function anotherfunction(){
   throw new Error("error occured 2 times")
    // return "code"
}





async  function trycatch(){
   try{
      const value=anotherfunction();
      console.log(value);
   }
   catch(err){
        console.log(err)
   }

}

trycatch();
