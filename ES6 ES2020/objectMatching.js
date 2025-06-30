  function getData(){
           let obj={
             ename:"amit",
             salary:10000

           }
          return obj
  }
//  let {ename:employeename,salary:employeesalry}=getData()

//  console.log(employeename)
//  console.log(employeesalry)


//  second part

  function getData(){
           let obj={
             ename:"amit",
             salary:10000,
             location:{
                city:"banglore"
             }

           }
          return obj
  }

   let {ename:employeename, salary:employeesalry, location: {city:employeecity}} = getData()

   console.log(employeecity)