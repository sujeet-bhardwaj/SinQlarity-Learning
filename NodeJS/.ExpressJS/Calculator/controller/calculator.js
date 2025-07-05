module.exports.add=((req,res)=>{
        console.log(req.body)
       let  n1=req.body.num1
       let n2=req.body.num2
         let sum=0;
         res.send(`Sum is ${n1+n2}`)       
   })

module.exports.sub=((req,res)=>{
        console.log(req.body)
       let  n1=req.body.num1
       let n2=req.body.num2
         let sum=0;
         res.send(`sub is ${n1-n2}`)       
   })

module.exports.mul=((req,res)=>{
        console.log(req.body)
       let  n1=req.body.num1
       let n2=req.body.num2
         let sum=0;
         res.send(`mul is ${n1*n2}`)       
   })

   module.exports.div=((req,res)=>{
        console.log(req.body)
       let  n1=req.body.num1
       let n2=req.body.num2
         let sum=0;
         res.send(`div is ${n1/n2}`)       
   })