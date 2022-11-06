//streams
/*
    readable
    writable
    duplex
    transform
*/
const fs = require('fs')
const read = fs.createReadStream('demo.txt',{highWaterMark:90000,encoding:'utf8'})
const write = fs.createWriteStream('demo.txt',{highWaterMark:90000,encoding:'utf8',flags:'a'})
// write.write(" hello wrold")
read.on('data',(res)=>{
    console.log(res)
})
read.on('error',(err)=>{
    console.error(err)
})

read.emit('data',"my name is ")