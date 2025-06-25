let num=10;
if(num>0){
    console.log("positive")
}
else if(num<0){
  console.log("negative")
}
else{
    console.log("number is zero")
}

// second 
let num2=25;
if(num%3==0&&num%5==0){
    console.log("divisible by both")
}
else{
    console.log("not divisible")
}


// third 


let marks=93

if(marks>=90&&marks<=100){
  console.log("Grade A")
}
else if(marks>=80&&marks<=89){
  console.log("Grade B")
}
else if(marks>=70&&marks<=79){
console.log("Grade C")
}
else if(marks>=60&&marks<=69){
    console.log("Grade D")
}
else if(marks<60){
 console.log("Grade F")
}


let char='a';

if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
    console.log("this is vowel")
}
else{
    console.log("consonant")
}

let year=2000;

if((year%4==0 &&year%100!=0)||(year%400==0)){
    console.log("leap year");
}
else{
    console.log("not leaap year");
}
