import { useRef, useState } from 'react'

function App() {
const [value,SetValue]=useState(0)
// let val=0; every time initilize 
let val=useRef(0) //value data is persist every time 
let btnref=useRef();
function handleIncrement(){
val.current=val.current+1
console.log(val.current)
SetValue(value+1)
}
function ChangeColor(){
 btnref.current.style.backgroundColor="red"
}



  return (
    <>
      <button  ref={btnref} 
      onClick={handleIncrement}>Increment</button>
      <br />
      <div>
          <button onClick={ChangeColor}>Change Color of 1st button</button>
      </div>
      <div>
        Count:{value}
      </div>
    </>
  )
}

export default App
