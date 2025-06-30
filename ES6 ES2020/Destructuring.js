let arr = [1, 2, 3, 4];

let [a, b] = arr;

// console.log("first element", a);
// console.log("second element", b);
[a, b] = [b, a];

// console.log("first element", a);
// console.log("second element", b);

// second part

function getobject(){
     let student={
         name:"sujeet",
         age:"23",
         class1:"MCA"
     }
  return student;
}
console.log(getobject());

let {name,age,class1}=getobject();
console.log(name,age);



