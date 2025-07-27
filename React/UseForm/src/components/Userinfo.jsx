import React,{useState} from 'react'
import styles from  './Userinfo.module.css'
let componentsRender=0;
const Userinfo = () => {
   const [name,setName]=useState("")
      const [email,setEmail]=useState("")
     const [mobile,setMobile]=useState("")
    function changeHandler(e){
        let inputname=e.target.name;
        let inputvalue=e.target.value;
        if(inputname ==='name'){
         setName(inputvalue)   
        }
        else if(inputname ==='email'){
         setEmail(inputvalue)
        }
        else if(inputname==='phone'){
            setMobile(inputvalue)
        }
    }
  const formSubmitHandler=(e)=>{
       e.preventDefault();
       console.log("form submitted");
    let data={
        name:name,
        email:email,
        phone:mobile
    }
   if(name===''){
    alert("please fill name")
   }
   else if(email ===''){
    alert("please fill email")
   }
   else if(mobile ===''){
    alert("please fill phone no")
   }
   else{
    console.log(data)
   }


  }
componentsRender++;
  return (
    <div className={styles.Userform}>
         <h2>User Info Details</h2>
         <h3>componentsRender:{componentsRender}</h3>
         <form action="#" className={styles.userDetailForm} onSubmit={formSubmitHandler}>
           <div className={styles.formgroup}>
               <label htmlFor="name">Name:</label>
               <input type="text" value={name} placeholder='Enter your name' onChange={changeHandler} name="name"  id="name"/>
           </div>
        <div className={styles.formgroup}>
               <label htmlFor="email">Email:</label>
               <input type="email" value={email} placeholder='Enter your email' onChange={changeHandler} name="email" id="email"/>
           </div>
  <div className= {styles.formgroup}>
               <label htmlFor="phone">Mobile No:</label>
               <input type="number" value={mobile} placeholder='Enter your number' onChange={changeHandler} name="phone"  id="phone"/>
           </div>

  <div className= {styles.formgroup}>    
               <input type="submit" value="save" />
           </div>


         </form>
    </div>
  )
}

export default Userinfo
