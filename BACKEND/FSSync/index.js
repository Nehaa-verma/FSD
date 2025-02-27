const {writeData,readData,appendData,deleteData}=require('./FileOperations');
console.log(writeData());
const res=readData();
console.log(res);
console.log(appendData());
// console.log(deleteData());