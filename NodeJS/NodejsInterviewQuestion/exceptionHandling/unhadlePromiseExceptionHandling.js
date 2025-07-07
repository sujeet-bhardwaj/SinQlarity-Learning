process.on("unhandledRejection",((reason,promise)=>{
    console.log("Controlled",reason)
}))



async function trycatch(){
    Promise.reject("reject the error")

}

trycatch();
