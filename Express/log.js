const log = (req, res, next) =>{
    console.log(req.method, req.url, req.params)
    next()
}

module.exports = log