import React from 'react'
import styles from  './UserinfoHook.module.css'
import {useForm} from 'react-hook-form'
let componentsRender=0;
const UserinfoHook = () => {
  const form=useForm()
  const {register,control,handleSubmit}=form;
  console.log('form',form)
  console.log("first",componentsRender)
componentsRender++;
  console.log("second",componentsRender)
  return (
    <div className={styles.Userform}>
         <h2>User Info Details</h2>
         <h3>componentsRender:{componentsRender}</h3>
        
    </div>
  )
}

export default UserinfoHook
