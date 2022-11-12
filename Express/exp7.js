const express = require('express')
const app = express()
const path = require('path')
const data = require(path.join(__dirname, 'data.js'))

app.get('/api/products', (req, res) => {
    const prods = data.map((prod)=>{
            const {product} = prod
            return {product}
        })
    res.status(200).json(prods)
})

app.get('/api/products/:prode', (req, res) => {
    const {prode} = req.params
    const single  = data.find((prod)=> prod.product === prode)
    if(!single){
        return res.status(404).send("product not found")
    }
    res.json(single)
})
app.get('/api/products/:id/reviews/:revId', (req, res) => {
    const {id} = req.params
    const {revId} = req.params
    const revie = data.find((prod)=> prod.product === id)
    const re = revie.reviews
    if(re===undefined){
        return res.status(404).send("No reviews")
    }
    
    let single = re.find((pr)=>pr.reviewId === Number(revId))
    if(!single){
        return res.status(404).send("product not found")
    }
    res.json(single)
})
app.listen(8000,()=>{
    console.log('8000')
})