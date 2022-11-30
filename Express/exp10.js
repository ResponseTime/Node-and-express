const express = require('express')
const app = express()
const path = require('path')
const log = require(path.join(__dirname, './log.js'))
app.use(log)
app.get('/', (req, res) =>{
    res.send('home page')
})
app.get('/about/:id', (req, res) =>{
    res.send('about page')
})
app.listen(5000,()=>{
    console.log('5000')
})