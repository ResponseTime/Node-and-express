const fs = require('fs');
const fsAsync = require('fs');
let file = fs.writeFileSync("demo.txt","hello world this is demo.txt ",'utf8');
fs.writeFileSync('demo.txt',"this is appended to demo.txt",{flag:'a'})
console.log(fs.readFileSync('demo.txt','utf8'));
console.log('\n');
fsAsync.readFile('demo.txt','utf8',(err,result) => {
    if(err){
        console.log("error ty")
        return 
    }
    const file = result
    fsAsync.writeFile('demo.txt',' batman',{flag:'a'},(err,result) => {
        if(err){
            return
        }
        fsAsync.readFile('demo.txt','utf8',(err,result)=>{
            console.log(result)
        })
    })
});