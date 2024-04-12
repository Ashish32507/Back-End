const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url=='/hello')
    {
        res.end("Hello World")
    }
    else{
        res.end("You are Trying to Hit A Wrong url")
    }
})

server.listen(800,()=>{
    console.log("Server is Started")
})