const fs=require('fs');

function writeData(){
    try{
        fs.writeFileSync('data.txt',"welcome to NODE JS FS Module");
        console.log("data is written successfully");
    }
    catch(err){
        console.log("error during writing in file:"+err);
    }
}
function readData(){
    try{
        const frd=fs.readFileSync('data.txt',{encoding:'utf8'});
        return frd;
        // console.log(frd);
    }
    catch(err){
        console.log("error during reading the file:"+err);
    }
}

function appendData(){
    try{
        fs.appendFileSync('data.txt',"hii. data is appended using file module");
        console.log("data is appended successfully");
    }
    catch(err){
        console.log("error during reading the file:"+err);
    }
}



function deleteData(){
    try{
        fs.unlinkSync('data.txt');
        console.log("data deleted");
    }
    catch(err){
        console.log("error during reading the file:"+err);
    }
}


const obj={
    writeData,
    readData,
    appendData,
    deleteData
}


module.exports=obj


