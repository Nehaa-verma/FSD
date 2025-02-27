const {writeAsync,readAsync}=require('./FileOperations');
console.log(writeAsync());
const res=readAsync();
console.log(res);
