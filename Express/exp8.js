const express = require('express')
const app = express()
const path = require('path')
const data = require(path.join(__dirname, 'data.js'))
app.get('/api/v1/query',(req, res)=>{
    let {search,limit} = req.query
    let prods = [...data]
    if(search){
        prods = prods.filter((pr)=>{
            return pr.product.startsWith(search)
        })
    }
    if(limit){
        prods = prods.slice(0, limit)
    }
    res.status(200).json(prods)
})

app.listen(5000)