 function printname(){
  console.log(`${this.fname}  ${this.lname}`)
 }

const student={
  fname:"sujeet",
  lname:"kumar",
}

const call=printname.bind(student);
call();