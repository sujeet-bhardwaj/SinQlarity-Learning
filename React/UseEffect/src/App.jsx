import User from "./Componenets/User"
import { useState, useEffect } from "react";
function App() {
 
 const [count,setCount]=useState(0);
 const [total,setTotal]=useState(0);

  // runs on every render before updation
//  useEffect(()=>{   
// alert("I will run on each render");

//  })


// runs only one time 
//  useEffect(()=>{   
// alert("I will run on only first render");

//  },[])

// run on when count is updated
//  useEffect(()=>{   
// alert("I will run on when count is updated");
//  },[count])

//  useEffect(()=>{   
// alert("I will run on when count,total is updated");
//  },[count,total])


useEffect(()=>{   
alert("count is updated");
return ()=>{
  alert("count is unmounted ")
}
 },[count])

function handleClick(){
  setCount(count+1)
}
function  Total(){
  setTotal(total+1)
}

  return (
    <>
     <h1>Hello jii</h1>
     <button onClick={handleClick}>clickme</button>
     <br />
     Count is:{count}
       <br />
        <button onClick={Total}>Click me</button>
     <br />
     Total is:{total}





    </>
  )
}

export default App
