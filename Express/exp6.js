const express = require('express')
const app = express()
const path = require('path')
const data = require(path.join(__dirname, 'data.js'))
app.get('/', (req, res) => {
        res.status(200).json(data)
})


app.listen(5000,()=>{
    console.log('5000')
})