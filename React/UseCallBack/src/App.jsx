import { useState } from "react"

import ChildA from "./components/ChildA";
import { useCallback } from "react";
function App() {
const [count,setCount]=useState(0);
  const handleClick=useCallback(()=>{
   setCount(count+1) 
  },[count])

  return (
    <>
     <div>
       Count:{count}
     </div>
     <button onClick={handleClick}>
       Increment
     </button>
     <br />
     <div>
      <ChildA buttonname="clickme" handleClick={handleClick}/>
      {/* we have no need to rerender every time 
       */}
     </div>
    </>
  )
}

export default App
