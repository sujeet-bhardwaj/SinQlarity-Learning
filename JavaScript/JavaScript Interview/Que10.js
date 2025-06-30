  
function except(value){
  const toBe=(newvalue)=>{
    if(value=== newvalue){
      return true;
    }
     throw new Error("not equal");

  }
     return { toBe}
}
const newValue=5;
console.log(except(5).toBe(newValue));
try{
  console.log(except(5).toBe(4));
}
catch(error){
  console.log("Error is",error.message);
};


