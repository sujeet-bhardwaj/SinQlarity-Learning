//   constant (also known as "immutable varables")

// this only makes the variable itself immutable, not its assigned content 
// for instance,in case the content is an object ,this means the object itself can still be altered 

const  a=5;
console.log(a)
// a=4;
// gives the error 
console.log(a)

const b={
    name:"sujeet",
    age:23
}
// b={
//     name:"ajeet",
//     age:24
// }
// this also gives error 
console.log(b)
b.roll=23
console.log(b)