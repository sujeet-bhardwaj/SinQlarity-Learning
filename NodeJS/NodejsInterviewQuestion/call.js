function product(){
//   console.log(this)
}
// console.log(this)
product();

function product2(productname,price){
  this.productname=productname;
  this.price=price;
}

const p1= new  product2("laptop",100000);
const p2= new  product2("laptop2",100000);
// console.log(p1.productname)
// console.log(p2.productname)


   function student(sname,productname,price){
    this.sname=sname
    product2.call(this,productname,price)
    // this.productname=productname
    // this.price=price
   }
 const student1=new student("sujeet","dell",450000);
 console.log(student1.price)
 console.log(student1.sname)
 console.log(student1.productname)



