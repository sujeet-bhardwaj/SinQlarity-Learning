  const UserDb=(sname:string,sclass:string)=>{
             console.log(sname,sclass);  
          return "data is reach there";
  }
  type lockedState="locked"|"unlocked"
  
  interface User{
       id:number,
       uname:string,
       password:string,
       age:number,
       is_active:true|false,
       accountstatus:lockedState
  }
  
   const UserUpdateDb=(objeUser:User)=>{
            console.log(objeUser)
          return "data is reach there";
  }

export {UserDb,UserUpdateDb}