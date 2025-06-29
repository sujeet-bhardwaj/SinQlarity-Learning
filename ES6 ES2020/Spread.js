//    spread
// use in both object and array  

const { Children } = require("react")

let arr=[1,2,3,4,5,6,7]
let arr2=[12,13,14]
console.log(...arr)
let combine=[...arr2,...arr]
console.log( combine)


// object 

let a={
    name:"sujeet",
    val:4
}

let b=a
console.log(a)
console.log(b)
b.name="ajeet"

console.log(a)
console.log(b)
// due to this error 
let obj={
    name:"amir",
    age:12
}
let obj1={...obj}
console.log(obj)
console.log(obj1)

obj.name="amirkhan"
console.log(obj)
console.log(obj1)




