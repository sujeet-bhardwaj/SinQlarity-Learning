process.on("uncaughtException",(err=>console.log(err)))


function anotherfunction(){
   throw new Error("error occured 2 times")
    // return "code"
}

function trycatch(){
    const value=anotherfunction();
    console.log(value)

}

trycatch();
