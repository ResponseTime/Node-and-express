const express = require('express')
const app = express()
//req -> middleware -> res
const log = (req, res, next) =>{
    console.log(req.method, req.url,req.params)
    next()
}
app.get('/', log, (req, res) =>{
    res.send('home page')
})
app.get('/about/:id', log, (req, res) =>{
    res.send('about page')
})
app.listen(5000,()=>{
    console.log('5000')
})