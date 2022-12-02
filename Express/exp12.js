const express = require('express')
const app = express()
const path = require('path')
const { people } = require(path.join(__dirname, 'data.js'))

app.get('/api/peoples', (req, res) => {
    res.status(200).json({ success: 1, data: people })
})

app.listen(5000, () => {
    console.log('5000')
})