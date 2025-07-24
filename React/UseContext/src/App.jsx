import { useState } from 'react'
import { createContext } from 'react'
import ChildeA from './components/ChildeA';
import ChildeB from './components/ChildeB';
import ChildeC from './components/ChildeC';
// create Context
const UserContext=createContext();

// stpe 2 
// wrap all the child inside a provider 



function App() {
const [user,Setuser]=useState({name:"sujeet"})  
  return (
     <> 
     <UserContext.Provider value={user}>
        <ChildeA/>
        <ChildeB></ChildeB>
        <ChildeC></ChildeC>
     </UserContext.Provider>
   
     </>
  )
}

export default App
export {UserContext}
