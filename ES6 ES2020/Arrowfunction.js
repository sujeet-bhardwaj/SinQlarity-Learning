//  function xyz(){
//     console.log("xyz",this)
//  }
//  console.log("here",this)
//  xyz()


// arrow function 

 const xyz=()=>{
    console.log("xyz",this)
 }
 console.log("here",this)
 xyz()
// constructoe nhii bna skte
// argument nhii hota hai 
// new.target nhii hota hai 

const retobj=(uname,age)=>{
    return {uname:uname ,age:age}
}
console.log(retobj("sujeet",23))