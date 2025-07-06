// change the 'this' for some object 
// but call it later 
// the simplest use of bind is to make a function that ,no matter how it is called ,is called with a particular 'this'
// ->in call(),and apply() we bind 'this' and execute at a time,while in bind() we bind 'this' now and execute it later 

let student2={
       sname:"ajeet",
       mobile:958073
}
let student={
       sname:"sujeet",
       mobile:958073,
      getname:function(){
         console.log(this.sname);
      }
}

// console.log(student.getname())
  let sn=student.getname.bind(student);
setTimeout(sn,1000)


  let sn2=student.getname.bind(student2);
setTimeout(sn2,1000)




