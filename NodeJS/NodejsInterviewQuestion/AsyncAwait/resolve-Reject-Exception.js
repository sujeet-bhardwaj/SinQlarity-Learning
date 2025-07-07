const getName=async()=>{
   throw new Error("something went wrong")
}

async function main(){
    try{
        const name=await getName();
       console.log("Got the name",name)
    }
    catch(error){
      console.log("Exception handing block -got error",error.message)
    }

} 
main();