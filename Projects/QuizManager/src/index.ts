import express from "express"
import mongoose  from "mongoose"
const app=express()
app.use(express.json())
import { Response,Request,NextFunction } from "express"
import userroutes from './routes/user'
import authrouter from './routes/user.auth'
import examRoute from './routes/exam'
import quizRoute from './routes/quiz'
const mongodb_url=process.env.LOCAL_STRING || "";
import ProjectError from "./helper/error"

declare global{
     namespace Express{
       interface Request{
        userId:String
       }
     }
}

interface ReturnResponse{
   status:"success"|"error",
   message:String,
   data:{}|[]
}

// redirect user route
app.use("/user", userroutes)
// redirect auth route 
app.use("/auth",authrouter)
app.use("/exam",examRoute)
//redirect quiz route
app.use("/quiz",quizRoute)

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
  // Default values
  const statusCode = typeof err.statusCode === "number" && err.statusCode < 500 ? err.statusCode : 500;
  const message =
    statusCode < 500
      ? err.message || "Something went wrong"
      : "Something went wrong. Please try again later.";

  const resp: ReturnResponse = {
    status: "error",
    message,
    data: err.data || {}, // use empty object if no error data
  };

  console.log("Error caught:");
  console.log("Status:", statusCode);
  console.log("Message:", message);

  res.status(statusCode).send(resp);
});


mongoose.connect(mongodb_url).then((
)=>{
app.listen(process.env.PORT,(error:any)=>{
    if(error){
        console.log("error occured",error)
    }
  else{
    console.log("server is connected")
  }
})

}).catch((error)=>{
   console.log("error occured",error)
})





