const http=require('http');
const PORT=2021;
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end("<h2> welcome to ABESEC </h2>");
})
server.listen(PORT,()=>{
    console.log("server is running on"+PORT);
})