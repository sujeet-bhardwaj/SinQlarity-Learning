//  const outerfucnction=()=>{
//    somevar=56;
//    return innerfunction=()=>{
// return somevar;
//    }

//  }

//  const xyz=outerfucnction();
//  console.log(xyz())


const outerfucnction=(power)=>{

   return innerfunction=(number)=>{
return number**power;
   }
}


 const xyz=outerfucnction(4);
 console.log(xyz(1))