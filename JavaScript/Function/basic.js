//  function greet(){
//     console.log("hello");
//  }
//  greet()

// // 1st type function

//  const hello=function (){
//     console.log("hello 2")
//  }
//  hello()
// // second type function anoymnous function 


//   let  hello3=() =>{
//     console.log("hello");
//    }
//    hello3()
// // arrow function


// function print1(){
//     console.log("Welcome to Javascript");
// }
// print1()

// function print(name){
//     console.log(`Welcome to Javascript ${name}`);
// }
// print("sujeet")

let arr=[1,2,3,4,5]
// let cal=0;
// function sum(arr){
//     for(const num of arr){
//         cal=cal+num 
//        }
//        return cal
// }
// console.log(sum(arr))


// arr.forEach((item,index)=>{
//     console.log(item,index)
// })
// console.log(arr);

// let arr4=arr.map((item)=>{
//     return  item=item+5
// })

// console.log(arr4)

let arr3=arr.filter((item)=>{
     return item%2==0 
})
console.log(arr3)


function leapyear(number){
   if((number%4==0&&number%100!=0)||(number%400==0)){
    return true;
   }
      
}
console.log(`${leapyear(2024)}`);




