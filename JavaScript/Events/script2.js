let button=document.querySelector("button");
button.addEventListener("click",()=>{
alert("Button Clicked");
})

let div=document.querySelector("div");
document.querySelector("div").addEventListener("mouseover",()=>{
div.style.color="green"

})

// let button=document.querySelector("button");
// button.addEventListener("dblclick",()=>{
// alert("Button Clicked");
// })


let input=document.querySelector("input");
input.addEventListener("keydown",(e)=>{
console.log(e.key); 
console.log(e.target);
console.log(e.target.value);
console.log(e.target.type);
})

// let input=document.querySelector("input");
// let h1=document.querySelector("h1");
// input.addEventListener("input",(e)=>{

// // h1.innerText=e.target.value;
// h1.innerText=input.value;

// console.log(e.target.value);

// })



 document.getElementById("dropdown").addEventListener("change", (e) => {
      alert("You selected: " + e.target.value);
    });


let form=document.querySelector("form");
let p=document.querySelector("p");
form.addEventListener("submit",(e)=>{
e.preventDefault();
p.innerText="form is submit";
})





