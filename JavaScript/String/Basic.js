let str1 = "Hello";
let str2 = '  World';
let str3 = `Hello ${str2}`;

console.log(str1.length)
console.log(str1.charAt(3));

console.log(str1.charAt(str1.length-1))


console.log(str2.trim());
console.log(str1.indexOf('o'))

console.log(str1.substring(1,4))

let count=0;
for(const num of str1){
    if(num=='l'){
       count++;
    }
}
console.log(count)
let str4=str1.slice(1,4);
console.log(str4)

console.log("hello"==="HELLO")
console.log("hello"=="HELLO")