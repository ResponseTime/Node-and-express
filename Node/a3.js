const os = require('os')
const path = require('path')
console.log(os.userInfo())
console.log(os.uptime()/60/60)

const obj = { 
    os:os.platform(),
    type:os.type(),
    total:os.totalmem(),
    free:os.freemem(),
    reL:os.release()
}

console.log(obj)

console.log(path.join(__dirname,'Express'))
console.log(path.basename(__dirname))