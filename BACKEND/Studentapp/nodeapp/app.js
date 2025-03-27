const http=require('http');
const fs=require('fs').promises;
const PORT=3005
const server=http.createServer((req,res)=>{
    if(req.url=="/register" && req.method=="POST"){
        let body='';
        let arr=[];
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',async()=>{
            const {name,email,pass}=JSON.parse(body);
            console.log("Name="+name);
            const data1=await fs.readFile('student.json',{encoding:'utf-8'});
            arr=JSON.parse(data1);
            const status=arr.find(ele=>ele.email==email)
            if(status){
                return res.end(JSON.stringify({msg:"email is already registerd"}));
            }
            arr.push({name,email,pass});
            fs.writeFile('student.json',JSON.stringify({name,email,pass}));
            // console.log(body);
        })
        res.end(JSON.stringify({msg:"user successfully register"}));
    }
    
})
server.listen(PORT,()=>{
    console.log("server is running on", PORT);
    
})