const http = require('http')
const fs = require('fs')
// const fstream = fs.createReadStream('./Express/home.html',{encoding:'utf-8'})
const file = fs.readFileSync('./Express/home.html',{encoding:'utf-8'})
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(file)
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='text-align:center'>Hello world about</h1>")
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end("page not found")
    }
})

server.listen(5000)
