import { useContext } from 'react'
import {UserContext} from '../App'
const ChildeC = () => {
     const user =useContext(UserContext)
  return (
    <div>
       <h1>{user.name}</h1>
    </div>
  )
}

export default ChildeC
