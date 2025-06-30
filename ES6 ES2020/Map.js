 
           let obj={
             ename:"amit"
           }
         let obj2={
             ename:"sajeet"
           }

        const studentmap=new Map();
        
       studentmap.set("key1",12);
    //    console.log(studentmap)
     console.log(studentmap.get("key1"));

     studentmap.set(obj,"he is good student");
     studentmap.set(obj2,"he is brilliant student")

     console.log(studentmap)