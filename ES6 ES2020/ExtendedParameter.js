  function addTwonumbers(n1,n2){
    return n1+n2
  }
// let sum1=addTwonumbers(1,2)
// console.log(sum1)
// let sum2=addTwonumbers(1)
// console.log(sum2)

// if you not pass a number then it is undefined and undefined + number is not a number 


// second part 

// function paasomenumber(num1,num2){
//   return num1+num2
// }
// rest parameter 
function paasomenumber(...numbers){
  let sum=0;
  numbers.forEach((e)=>{
    sum=sum+e
  })
  return sum
}
function paasomenumber(num1,num2,...numbers){
  console.log(num1)
  console.log(num2)

}


let res=paasomenumber(2,3,4,5,6,7,8);
console.log(res)


