   function userManagerModule(){
      userlist=[];
    function add(uname){
        userlist.push(uname);
        printfunction(uname)
    }
   function printfunction(uname){
     console.log("User Added -name :",uname)
   }
return {addnew:add}
   }


   const usermanger=userManagerModule();
   usermanger.addnew("sujeet");

