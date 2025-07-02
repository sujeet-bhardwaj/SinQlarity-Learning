  function add(a,b){
        console.log("sum of the value",a+b)
  }
    function subtract(a,b){
        console.log("sum of the value",a-b)
  }

  const addf=(a,b)=>{
         return a+b
  }
  
//   in this syntax exports for export and after this word is for which name to import and after initilize operator name is functions
 exports.sum=add
 exports.sub=subtract
 exports.sumf=addf