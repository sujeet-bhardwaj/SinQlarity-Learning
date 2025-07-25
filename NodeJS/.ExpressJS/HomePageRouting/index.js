const express=require('express')
const app=express()
const path=require('path')
const hostrouter=require('./HostRouter')
const homeroute=require('./HomeRouter')
const notfound=require('./404route')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(homeroute);
app.use(hostrouter);
app.use(notfound);

// app.get("/",(req,res)=>{
//     res.send(`<h1>Welcome to Airbnb</h1>
//     <a href="/Add-home">Add Home</a>`)   
// })


// app.get("/Add-home",(req,res)=>{
//     res.send(`<h1>Added Your Home</h1>
//        <form action="/Home-added" method="POST">
//       <input type="text" name="homename">
//        <input type="submit" value="AddHome ">
//     </form>`)   
// })
// app.post("/Home-added",(req,res)=>{
//     console.log(req.body)
//     res.send(`<h1>Home Added Succesfully</h1>
//     <a href="/">Go to home</a> `)   
// })


app.listen(3001)



