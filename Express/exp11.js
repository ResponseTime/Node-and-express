const express = require('express');
const app = express();

const log = (req, res, next) => {
    console.log("wr")
    next()
}
const auth = (req, res, next) => {
    console.log("auth")
    next()
}

const th = (req, res, next) => {
    if(req.query.user === 'aayush'){
        req.query.user ={name:'aayush',age:20}
    }
    next();
}
app.use([auth,log,th]);

app.get('/', (req, res) => {
    res.json(req.query.user)
})

app.listen(5000,()=>{
    console.log('w')
})