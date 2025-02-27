function sum1(num1, num2){
    return num1+num2;
}

const multiplication1=(num1,num2)=>{
    return num1*num2;
}

const obj={
    sum1,
    multiplication1
}
module.exports=obj;

// module.exports=sum;
// const result=sum(12,20);
// console.log("sum="+result)