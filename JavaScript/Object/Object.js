 const person = {
  name: "Sujeet",
  age: 20,
  isStudent: true
};


const car={
   brand:"toyota",
   model:"EV",
   year:"2025"
}

// car.color="red"
// console.log(car.year)
// console.log(car)
// delete car.color
// console.log(car)


const student={
    name:"sujeet",
    roll:"12",
    address:{
        city:"varansai",
        zip:"221204"
    }
}

// console.log(student.address.city)
// student.address.city="banaras"
// console.log(student.address.city)
// student.address.country="India"
// console.log(student)
// console.log(student["name"])
// console.log(student["roll"])
// using for in 
for(const num in student){
    console.log(`the key is ${num} and  value is ${student[num]}`)
}
console.log(Object.values(student));
// gives a array 
console.log(Object.keys(student));

console.log(Object.values(student.address));
console.log(Object.entries(student))

// 

const playlist={
    songs:["first","second","third"],
    calculator:(a,b)=>{
         return a+b
    },
    greet:(name)=>{
    console.log(`my name is ${
    name
    }`)
    }

}

console.log(playlist.calculator(5,4))

playlist.greet("sujeet");