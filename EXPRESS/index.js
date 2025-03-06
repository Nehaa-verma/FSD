const express=require('express');
const path=require("path");
const app=express()
const port=3002
const user=[{id:101,name:"Neha"},
    {id:102,name:"Priya"}
]



app.get('/',(req,res)=>{
    // res.send("this is home page")
    // res.sendFile(path.join(__dirname,"Home.html"))
    console.log("data send by user", req.query.name)
    res.send("welcome, "+req.query.name)
})

// app.get('/contact',(req,res)=>{
//     // res.send("this is home page")
//     res.sendFile(path.join(__dirname,"Contact.html"))
// })

// app.get('/about',(req,res)=>{
//     // res.send("this is about page")
//     // res.json(user);
//     res.sendFile(path.join(__dirname,"About.html"))
// })

app.listen(port,()=>{
    console.log(`app run at http://localhost:${port}`)
})