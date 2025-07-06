//  Arrow function
// ()=>{}
// single variable
// uname=>{}
// single varaible and single return 
// uname=>"hi"+uname


const addTwonumber=(num1,num2)=>{
    return num1+num2;
}
const addHi=uname=>{
      return "hi"+uname
    }
const addname=uname=>"hello"+uname

console.log(addTwonumber(3,5));
console.log(addHi("sujeet"));
console.log(addname("sujeet"))


const isthis=()=>{
    console.log(this);
}
console.log(this);
isthis();