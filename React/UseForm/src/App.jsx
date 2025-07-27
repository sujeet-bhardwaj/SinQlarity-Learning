import { useState } from 'react'

import UserinfoHook from './components/UserinfoHook'
import ChildA from './components/ChildA';
import UserValidation from './components/UserValidation';

function App() {

  return (
    <>
    {/* <ChildA></ChildA> */}

     {/* <UserinfoHook/> */}
     <UserValidation/>
    </>
  )
}

export default App
