 const person={
       id:1234,
       pname:"xwz"
 }

const xyz=Symbol('xyz');
person[xyz]="Hidden data";
// this hidden in person object 
console.log(person)
person.id=2;
console.log(person)
console.log(Object.getOwnPropertyNames(person));

// global symbol

const xy=Symbol.for('xy');
person[xy]="not hidden data"
console.log(person[xy])
const iknow=Symbol.for('xy')
    console.log(person[iknow])


 


