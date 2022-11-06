const emitter = require('events');
const http = require('http');
const event = new emitter();
event.on('message',(message) => {
    console.log(`message received the message is "${message}"`);
})
event.emit('message',"my name is hello!")

const server = http.createServer()
server.on('request',(req,res) => {
    res.end("hello world")
})

server.listen(5000)