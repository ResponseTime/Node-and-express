const express = require('express')
const app = express()

/*
app.get
app.post
app.put
app.delete
app.all
app.use
app.listens
*/
app.get('/',(req, res) => {
    res.send("Home page")
})
app.all('*',(req, res) => {
    res.header('Content-Type', 'text/html')
    res.status(404).send("<h1>404 Not Found</h1>")
})
app.listen(5000,()=>{
    console.log('5000')
})