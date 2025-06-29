 let mydate=new Date();

 function nextDate(){
  console.log("next");
  console.log(this)
  let date=this.getDate();
   return date+1
 }
  mydate.nextDate=nextDate;

  // console.log("object value",mydate)
  // mydate.nextDate()
  const newDate=mydate.nextDate();
  console.log(`next date is ${newDate}`);



  // second question 



  