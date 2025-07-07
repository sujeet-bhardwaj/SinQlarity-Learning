 async function anotherfunction(){    
    // return "code"
      throw new Error("error occured");
}
function trycatch(){
 
anotherfunction().then((data)=>console.log(data)).catch((err)=>console.log(err))


}

trycatch();
