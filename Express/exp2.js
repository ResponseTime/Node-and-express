const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='text-align:center'>Hello world</h1>")
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='text-align:center'>Hello world about</h1>")
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end("page not found")
    }
    // console.log(req.method)
    // console.log(req.url)
})

server.listen(5000)
