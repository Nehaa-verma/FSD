// // console.log("hello world");
// // const div=document.getElementsByClassName("parent");
// // console.log(div);
// // function getData(){
// //     console.log("inside function");
// //     div[0].innerHTML="<h2 style=color:red> hello </h2>";
// // }
// // const button=document.getElementsByClassName("btn");
// // console.log(button);
// // button[0].addEventListener("CLICK",getData);


// const promise=new Promise((resolve,reject)=>{
//     let a=5;
//     if(a>10){
//         resolve("accepted");
//     }
//     else{
//         reject("rejected");
//     }
// })
// promise.then((msg)=>{console.log(msg)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>console.log("all resources have closed"));



// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"Neha Verma",Stack:"mern stack"});
// })
// promise2.then((data)=>{console.log("hii"+data.name)})
// .catch(x=>{console.log(x)})



const f=fetch("https://dummyjson.com/products");
f.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(f);
    })

})