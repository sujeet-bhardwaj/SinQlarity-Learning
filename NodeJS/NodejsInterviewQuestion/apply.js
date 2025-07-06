// in call pass argument 
// in apply pass array


function marksdetail(...marks){
this.subject1=marks[0]
this.subject2=marks[1]
this.subject3=marks[2]       
this.subject4=marks[3]
this.subject5=marks[4]

let status="pass"
marks.forEach((mark)=>{
   if(mark<33){
    status="fail"
   }

})
this.status=status

}

function student(sname,...marks){
      marksdetail.apply(this,marks)  
    this.sname=sname
   
// this.subject1=marks[0]
// this.subject2=marks[1]
// this.subject3=marks[2]       
// this.subject4=marks[3]
// this.subject5=marks[4]

}


const std1=new student("sujeet",96,69,49,68,65)
console.log(std1)