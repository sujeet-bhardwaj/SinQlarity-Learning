 let fname=document.querySelector("#fname")
 let lname=document.querySelector("#lname")
let submitbtn=document.querySelector("#submitbtn")
let form=document.querySelector("form")
let cont=document.querySelector("#cont")
let age=document.querySelector("#age")
let res=document.querySelector("#res")
 let birth=document.querySelector("#birth")
 let dateof=document.querySelector(".dateof")
 let p=document.querySelector("#para")
const today = new Date();
const year=today.getFullYear()
 console.log(year)

function checkAge(){
   let data=birth.value
//    console.log(data)
   let data2=data.substring(0,4);
//    console.log(data2)
//    console.log(typeof data2)
   if(year-data2>=18){
    document.querySelector("p").innerText=""
    submitbtn.disabled=false;
   }
   else{
    let p=document.createElement("p")
    p.innerText="should age greater than 18"
    dateof.append(p);
    submitbtn.disabled=true;
   }
  }
birth.addEventListener("input",checkAge);


function validCheck(){
 if(fname.value.trim()!="" && lname.value.trim()!=""){
    submitbtn.disabled=false;
 }
else{
    submitbtn.disabled=true;
}
}
fname.addEventListener("change",validCheck);
lname.addEventListener("change",validCheck);
  


form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
   p.innerText="Form submitted";
   console.log(cont.value);
   Reset();
   validCheck();
})

form.addEventListener("click",(e)=>{
   p.innerText=""
})




function Reset(){
      fname.value="";
    lname.value="";
    cont.value="";
    age.value="";
    res.value="";
    birth.value="";
}
