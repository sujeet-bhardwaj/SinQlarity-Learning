let str="helloiam"

let arr=Array.from(str)
// console.log(arr)


function checkdata(){
//     console.log(arguments);
//    console.log(arguments.length);
//    let arr=Array.from(arguments)
//    console.log(arr)
}

checkdata(1,2,3,4,5)


// let arr2=["a","b","c","d"]

// let keys=arr2.keys();

// console.log(keys)

// for(let e of keys){
//     console.log(e)
//     console.log(arr2[e])
// }


// array.find()

let arr3=[12,13,1,4,15]

let firstoddnumber=arr3.find(getodd)

function getodd(value,index,arr){
  return value % 2 !=0;

}
console.log(firstoddnumber)

// Array findindexof()

let  arr4=[12,13,1,4,15]

let indexof=arr4.findIndex((value,index,arr)=>{
   return value % 2!=0;
})
console.log(indexof)
