
const student={
    uname:"aakarsh",
    moible:5865,
    address:"varanasi"
}
const {uname,mobile}=student

console.log(uname);
console.log(mobile);









const marksOfstudent=[40,98,89,66,87,44,55,77];


// studentmark=marksOfstudent[0];
// studentmark2=marksOfstudent[1];
// studentmark3=marksOfstudent[2];
// studentmark4=marksOfstudent[3];

// console.log(studentmark);
// console.log(studentmark2);
// console.log(studentmark3);
// console.log(studentmark4);


[studentmark,studentmark2,studentmark3,studentmark4,...othermark]=marksOfstudent;


console.log(studentmark);
console.log(studentmark2);
console.log(studentmark3);
console.log(studentmark4);
console.log(...othermark)