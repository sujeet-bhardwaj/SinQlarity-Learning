let btn1=document.querySelector("#btn1");
let a=25;

// btn1.onclick=()=>{
// console.log("button clicked");
// ++a;
// console.log(a);
// }




// btn1.onclick=()=>{
// console.log("button not clicked");
// ++a;
// console.log(a);
// }

let h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
  h1.style.color="green";
});

const heading = document.getElementById("heading");
    heading.addEventListener("mouseover", () => {
      heading.innerText = "You hovered over me!";
    });

let live=document.querySelector("#live")
let value=document.querySelector("#value")
live.addEventListener("input",()=>{
value.innerText=live.value;
})
 const form = document.getElementById("myForm");
    const formMsg = document.getElementById("formMessage");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMsg.innerText = "Form submission ";
    });
    let values=0;
let h3=document.querySelector("h3")
let button=document.querySelector("#unique")
button.addEventListener("click",()=>{
    values++; 
    console.log(values);
    h3.innerText="value is:"+values
})




// overwrite problem resolved there 









