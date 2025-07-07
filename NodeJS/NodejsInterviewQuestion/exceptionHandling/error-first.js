const fs=require('fs')

function tryErrorfirst(){
 fs.readFile("file.txt",(err,data)=>{
if(err){
    console.log("Error occured",err)
    return;
}
console.log(data.toString());

 });


}
tryErrorfirst()
