//  block scoped variables 
// let and const both scope variables 
// console.log(a)
// gives undefined 
// var a=5;

// console.log(b)
// gives reference error 
let b=7;

{
    let a=34;
}
console.log(a)
// gives error 