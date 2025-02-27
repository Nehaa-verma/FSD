const fs=require('fs');

function writeAsync(){
    fs.writeFile('data.pdf',"data is written using fs module",(err)=>{
        if(err){
            console.log("error during the data");
        }
        else{
            console.log("data written successfully");
        }
    })
}

function readAsync(){
    fs.readFile('data.pdf',{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("error while reading file:"+err);
        }
        else{
            // console.log(data);
            return data;
        }
        })
}

const obj={
    readAsync,
    writeAsync
}
module.exports=obj;

