// Interface :
// cannot be instantiated -initilize
// public 



// class
// can use to create new object 
// -public private protect 



// object types
// strcture is fixed there is 
// let num:{x:number;y:number}={x:1,y:4};
// console.log(num)

// // optional Properties 
// // there y is optional 
// let num1:{x:number;y?:number}={x:1}
// console.log(num1)

// // --Interface 
// // An interface Declaration Is another way to name an object type:
// interface Point{
//   x:number,
//   y:number
// }

// let p1:Point={x:100,y:100};

// // type alias
// type MyPoint={
//   x:number;
// y:number

// }
// let p2:MyPoint={x:100,y:100};

// // Diffrence Between type alias and interface 
// // you can redeclare interface but not type alias 
// // interface Point {
//     // x:number
// // y:number
// // x:number
// // z:number
// // }

// // type MyPoint={
//     // x:number,
//     // y:number
// // }


// // --union types
// let id:number|string=2;
// let x:string[]|string=["@","e"];

// // --Mapped Types

// type onlyBoolsAndHorses={
//       [key:string]:boolean|"sujeet";

// };


// const conforms:onlyBoolsAndHorses={
//    del:true,
//    rodney:false,
//    x:"sujeet",
// //    3:"E" 
//     // not allowed key should be string  
// }; 


 const classcheck=()=>{

// // ---case 1,Now not work in latest version ,initilization is mandatory 
// class Point{
//     // x:number;
//     // y:number;
//    x:number=0;
//    y:number=0;
// }
// const pt=new Point();
// pt.x=1;
// pt.y=2;

// console.log(pt)
// // No error either you assing value or not 
// // end case1

// // --case 2

// class Point1{
//    x=0;
//    y=0;
// //    type is fixed there automatic like x is number and y is also number 
// }
// const pt1=new Point();
// pt1.x=1;
// pt1.y=2;
// console.log(pt1)
// // type will be decided with initlization in class 
// // end class

// // --case 3
// class Point2{
// x:number;
// constructor(n:number){
//     this.x=n;
// }


// }
// const pt2=new Point2(3);
// console.log(pt2)
// // end case 3

// case 4 Getter And Setter 

class Student{

private _name:string="";
private _standard:Number=0;

get name():string{
    // validation check
    return this._name
}
set name(value:string){
    // validation check
     this._name="#"+value;
}
get standard():Number{
    // validation check
    return this._standard
}
set standard(value:Number){
    // validation check
     this._standard=value
}

}
let sujeet=new Student();
sujeet.name="sujeet"
sujeet.standard=8;
console.log("sujeet",sujeet)

}

classcheck()

 

// interface merge 
 import { Request,Response } from "express";

interface student{
  name:string,
  age:number
}
interface student{
    level:string
};
const mergeinterface=(req:Request,res:Response)=>{
 const sujeet:student={name:"sujeet",age:24,level:"MCA"}

};

class Employee{
  ename:String;
  salary:Number;
  constructor(name:String,salary:Number){
      this.ename=name;
      this.salary=salary;
  }

}

class Employeewithage extends Employee{
  age:Number=0;
}






const classemp=(req:Request,res:Response)=>{
 const sujeet=new Employeewithage("sujeet",20000);
sujeet.salary=30000
sujeet.age=45;
}

