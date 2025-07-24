import FirstComponent from "./components/FirstComponent";
import ChildrenComponent from "./components/ChildrenComponent"
import { useState } from "react";
function App() {
  const [Intialvalue,setValue]=useState(0);
  const [update,setUpdate]=useState(true);
  console.log(update)
function Increment(){
setValue(Intialvalue+1)
}
console.log(update)
function updatebutton(){
  setUpdate(false)
}
 function toggleButton(){
  setUpdate(true);
 }   
  return (
    <>
    <button onClick={toggleButton}>button clicked</button>
    {update?<FirstComponent value="First" Intialvalue={Intialvalue} Increment={Increment}  update={updatebutton}/>:null} 
      <ChildrenComponent>
        <h1>children component</h1>
        <p>pass the component</p>
      </ChildrenComponent>
    </>
  );
}
export default App;
