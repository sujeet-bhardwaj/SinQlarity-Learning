let fruits = ["apple", "banana", "orange"];
fruits.push("hello");
fruits.push("apple3");
console.log(fruits);

console.log(fruits.indexOf("apple"));

console.log(fruits.reverse())


 let arr=['apple','banana','mango','orange','papaya']

 for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
 }


  for(let i=0;i<arr.length;i++){
   if(arr[i]=='orange'){
    console.log("find the element ");   
    break;
   }
 }

console.log(arr.includes('banana'));


// shift unshift push pop

// push add to end 
// pop remove from end 
// shift remove from start 
// unshift add to start 

let arr2=["H", "e", "l", "l", "o"];
let arr3=arr2.join("");
console.log(arr3);

console.log(arr2)

let arr4=arr2.concat(arr3)
console.log(arr4)

