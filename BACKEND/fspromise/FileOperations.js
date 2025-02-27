const { log } = require('console');

const fs=require('fs').promises;
const pd=fs.writeFile('student.pdf',"CSEB students data");
// console.log(pd);
pd.then(()=>{
    console.log("data written successfully");
})
.catch((err)=>{
    console.log("error while writing the file"+err);
})
.finally(()=>{
    console.log("resources closed");
})

async function readFilepromise(){
    try{
        const data= await fs.readFile('student.pdf',{encoding:'utf-8'});
        console.log(data);
    }
    catch(err){
        console.log("error while reading the data"+err);
    }
    
}
readFilepromise();
