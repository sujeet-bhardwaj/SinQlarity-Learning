// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
// factorial 
let  fact=8;

let factorial=1;
for (let i=fact; i>=1; i--) {
  factorial*=i;
}
console.log(factorial);
// fibonaci number

let a=0
let b=1

let n=8;
for(let i=0;i<n;i++){
  console.log(a)
  let c=a+b
  a=b
  b=c
}

for(let i=0;i<5;i++){
for(let j=0;j<=i+1;j++){
console.log("*")
}
console.log("\n")

}