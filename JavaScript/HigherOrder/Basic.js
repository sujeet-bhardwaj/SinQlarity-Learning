//   map ,filter and reduce 

// let arr=[1,2,3,4,5]
// let arr2=arr.map((item)=>item*2)
// console.log(arr2)
// let arr2=arr.map((item)=>{
//     if(item%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// )
// console.log(arr2)
// let arr=["apple", "banana", "kiwi"];

// let arr2=arr.map((item)=>{
//     return item.length;
// })
// console.log(arr2)


// filter 

let arr2=[5, 12, 8, 130, 44]
// let arr=arr2.filter((item)=>{
//      return item>10
// })
// console.log(arr)
// let arr=arr2.filter((item)=>{
//      return item%2==0
// })
// console.log(arr)

// reduce 

let arr=[1, 2, 3, 4, 5]

// const myTotal = arr.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//  },0)
// console.log(myTotal)

const myTotal = arr.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+1
 },0)
console.log(myTotal)

// he takes a function and intial value of accumulator 
// and function takes accumulator the total and current value 

// const max=arr.reduce((acc,curr)=>{
// if(acc<curr){
//     acc=curr
// }
// return acc
// },0)
// console.log(max)


// const max=arr.reduce((acc,curr)=>acc>curr?acc:curr,0)
// console.log(max)

// filter and map

let arr4=[1, 2, 3, 4, 5, 6]

let arr6=arr4.filter((item)=>item%2==0).map((item)=>item*2)
console.log(arr6)
