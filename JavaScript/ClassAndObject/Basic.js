//  const employee={
//       calctax(){
//         console.log("tax rate is 10%");
//       }

const { Children } = require("react");

//  }
//  const employee1={
//     salary:5000,
//  }
//  employee1.__proto__=employee
// employee1.calctax()

//  const employee2={
//     salary:5000,
//     calctax:function(){
//         console.log("tax rate is 20%");
//     }
//  }
// employee2.calctax() 
// // object method is greater priority 

// second part 


// class car{
//    stop(){
//       console.log("stop the car ")
//   }
//    start(){
//    console.log("start the car")
//    }
//  constructor(name){
//            this.name=name;
//          console.log("object initlized this is invoked");
//  }
// }

// let swift=new car("swift")
// swift.start()
// swift.stop() 
//  console.log(swift.name) 


//  inheritance 

class mobile{
     constructor(){
        console.log("parent constructor");
     }
    switchon(){
        console.log(" open the mobile phone")
    }
    switchoff(){
        console.log("off the mobile phone")
    }
}

class nokia extends mobile{
  constructor(){
       super();
    //    first call the super constructor if you do not call then gives error 
        console.log("child constructor");
     }
   ringtone(){
    console.log("ringtone is good")
   }
  switchon(){
    super.switchon()
    // call the parent  parent method 
    console.log("nokia23 is start")
    // method is also in parent class
    // method overiding  
  }

}

let nokia23=new nokia();
nokia23.switchoff()
nokia23.switchon()
