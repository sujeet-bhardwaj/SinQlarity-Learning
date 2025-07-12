const input=document.querySelector('input');
// const h2=document.querySelector('h2');
const Delete=document.querySelector('.delete');
const hide=document.querySelector('.hide')
// const h2=document.createElement('h2')
// const button=document.createElement('button')
//    button.innerText=delete
// button.setAttribute("class", "delete");
const add=document.querySelector('.add');
// console.log(add)
const lower=document.querySelector('.lower');
// console.log(lower)
let data='';

// input.addEventListener("change", (event) => {
//     add.disabled=false;
//      data=event.target.value
//   });




//    add.addEventListener("click", () => {
//        const div=document.createElement("div")
//        div.setAttribute("class", "hide");
//           const h2=document.createElement('h2')
// let  button=document.createElement('button')

// button.setAttribute("class", "delete");

//    button.innerText="Delete";
//    console.log(button)
//         h2.innerText=data;
//         lower.append(div)
//         div.append(h2);
//         div.append(button)
//         lower.style.display="block"; 
//         input.value = "";

//      button.addEventListener("click",()=>{
//            div.remove();
//      })
    
//     });


  if(data ===""){
       input.addEventListener("change", (event) => {
          add.disabled=false;
     data=event.target.value
  });
  }  
 add.addEventListener("click", () => {
       const div=document.createElement("div")
       div.setAttribute("class", "hide");
          const h2=document.createElement('h2')
let  button=document.createElement('button')

button.setAttribute("class", "delete");

   button.innerText="Delete";
   console.log(button)
        h2.innerText=data;
        lower.append(div)
        div.append(h2);
        div.append(button)
        lower.style.display="block"; 
        input.value = "";
add.disabled=true;
     button.addEventListener("click",()=>{
           div.remove();
     })
    });

  






  

// if (data === "") {
//     console.log("empty object");
// } else if(data !== ""){
//     add.addEventListener("click", () => {
//         h2.innerText = data;
//         console.log(h2);

//         lower.style.display ="block";  // Corrected: "inline" replaced with "block" for better layout control

//         input.value = "";
//     });
// }





