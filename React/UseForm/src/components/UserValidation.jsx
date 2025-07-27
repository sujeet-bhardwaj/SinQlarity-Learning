import React from 'react'
import styles from  './UserinfoHook.module.css'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
let componentsRender=0;
const UserValidation = () => {
  const form=useForm()
  const {register,control,handleSubmit}=form;
  console.log('form',form)
  const  formsubmit=(data)=>{
    console.log("from submitted",data)
  }
componentsRender++;
  return (
    <div className={styles.Userform}>
         <h2>User Info Details</h2>
         <h3>componentsRender:{componentsRender}</h3>
          <form action="#" className={styles.userDetailForm} onSubmit={handleSubmit(formsubmit)}>
           <div className={styles.formgroup}>
               <label htmlFor="uname">Name:</label>
               <input type="text"   id="uname" {...register('uname',{
                required:{
                  value:true,
                  message:'please fill your name'
                }
               })}/>
           </div>
        <div className={styles.formgroup}>
               <label htmlFor="email">Email:</label>
               <input type="email"  id="email" {...register('email',{
                required:{
                  value:true,
                  message:"please fill email"

                }
               })}/>
           </div>
  <div className= {styles.formgroup}>
               <label htmlFor="phone">Mobile No:</label>
               <input type="number"  id="phone" {...register('phone',{
                required:{
                  value:true,
                  message:"please fill the mobile no"
                }
               })}/>
           </div>
  <div className= {styles.formgroup}>    
               <input type="submit" value="save" />
           </div>
         </form>
         <DevTool control={control}/>
    </div>
  )
}
export default UserValidation
