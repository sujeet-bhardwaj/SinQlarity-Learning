  let student={
    sname:"sujeet",
    fname:"manjeet",
    class:"MCA",
    mobile:45565
  }
//  console.log(student.sname)
  const stringst=JSON.stringify(student)
  console.log(stringst)
  console.log(stringst.sname)

//   convert string to object 

let objectfromstring=JSON.parse(stringst)
console.log(objectfromstring)