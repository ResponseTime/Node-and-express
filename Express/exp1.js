const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("request hit")
    res.end("hello world")
})

server.listen(5000)
