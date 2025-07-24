import { useMemo } from 'react';
import { useState } from 'react'



function App() {
 const [value,SetValue]=useState(0);
 const [Input,SetInput]=useState(0);


//   function ExpensiveTask(num){
//    console.log("expensive Task")
//     for(let i=0;i<=100000;i++){}
//     return num*2
//  }
let doublevalue=
useMemo(
  ()=>ExpensiveTask(Input),[Input]
)



  return (
    <>   
    <button onClick={()=>{
  SetValue(value=>value+1)
 }}>Click me </button>
    <p>Count:{value}</p>
    <p>Double:{doublevalue}</p>
   <input type="number" placeholder='enter number'  value={Input} onChange={(e)=>SetInput(e.target.value)} />

    </>
  )
}

export default App
