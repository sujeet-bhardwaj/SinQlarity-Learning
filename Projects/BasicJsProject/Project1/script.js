 let red_block=document.querySelector(".red_block");
let green_block=document.querySelector(".green_block");
let blue_block=document.querySelector(".blue_block");
let yellow_block=document.querySelector(".yellow_block");


let userinput=document.querySelector("#userinput");

// add delete button
let add=document.querySelector("#add");
let deleteBtn=document.querySelector("#deletebtn");

// move button
let move_r=document.querySelector("#move_r");
let move_g=document.querySelector("#move_g");
let move_b=document.querySelector("#move_b");
let move_y=document.querySelector("#move_y");
// starting here 


let data="";
userinput.addEventListener("input",()=>{
       data=userinput.value;
})

let div=document.createElement('div')
add.addEventListener("click",()=>{
    if(data!=""){
     div.innerText=data
     div.setAttribute("class","text")
     console.log(div)
     red_block.append(div)
     add.disabled=true;
     userinput.disabled=true
    } 
})
 let main=document.querySelector("div");
deleteBtn.addEventListener("click",()=>{

document.querySelector(".text").remove()
  userinput.value=""
 userinput.disabled=false;
  add.disabled=false;
})


move_r.addEventListener("click",()=>{
  red_block.append(div)
})

move_g.addEventListener("click",()=>{
  green_block.append(div)
})


move_b.addEventListener("click",()=>{ 
  blue_block.append(div)
})

move_y.addEventListener("click",()=>{  
  yellow_block.append(div)
})