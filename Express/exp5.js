const express = require('express')
const path = require('path')
const app = express()
//setup static and middleware
app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'))
})
app.listen(5000,()=> console.log('5000'))