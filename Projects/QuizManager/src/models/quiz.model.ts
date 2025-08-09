import mongoose  from "mongoose";

const QuizSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
question_list:[
    {
     question_number:Number,
     question:String,
    options:{
   
    }

    
  }
],
 answer:{},
 created_by:{
     type:mongoose.Types.ObjectId
  }, 
 ispublished:{
    type:Boolean,
    default:false
}
},{timestamps:true})


const Quiz=mongoose.model("quiz",QuizSchema)
export default Quiz