const fs = require('fs').promises;
console.log("first")
setTimeout(() => {
    console.log("second")
}, 0);
console.log("third")

// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         fs.readFile(path,'utf8', (err, data) =>{
//             if(err) reject(err);
//             else resolve(data);
//         })
//     })
// }
const res = async(path)=>{
    try{
        const first = await fs.readFile(path,'utf8')
        console.log(first)
        await fs.writeFile(path,'This is appended to the end of the file',{flag:'a'})
        console.log(await fs.readFile(path,'utf8'))
    }
    catch(err){
        console.error(err)
    }
}
res('demo.txt')
// getText('demo.txt')
//     .then((data) =>console.log(data))
//     .catch((err) =>console.log(err));