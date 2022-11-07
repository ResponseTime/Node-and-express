const http = require('http')
const fs = require('fs')
const port = 5000
const server = http.createServer((req,res)=>{
    const filestream = fs.createReadStream('demo.txt',{encoding:'utf-8'})
    filestream.on('open',()=>{
        filestream.pipe(res)
    })
})

server.listen(port,()=>{
    console.log("server started")
})