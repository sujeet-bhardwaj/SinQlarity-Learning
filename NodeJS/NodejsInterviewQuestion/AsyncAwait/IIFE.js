  
  async function getname(){
      return "Code By Heart"
  }
  (async()=>{
     const name=await getname()
     console.log( "name is"+name)
  })()