// console.log("welcome to js");
// const a=22;
// console.log(a);
// if(a>10){
//     let b=25;
//     a=26;
//     console.log("a inside condition"+a);
// }
// console.log("a outside condition"+b);

let a = 12;
let b = "12";
console.log(typeof a);
console.log(typeof b);
let today = Date();
console.log(today);
if (a === b) {
  console.log("welcome");
} else {
  console.log("hello");
}
let myname = "neha";
let college = "abes";
let result = `hii,my name is ${myname} and i am doing engineering from ${college}`;
console.log(result);

let key="sname";
const student = {
  sname: "neha",
  scourse: "btech",
  college: "abes"
};
console.log("name: " + student.sname + "course: " + student.scourse);
const { sname } = student;
console.log(sname);
student[key]="neha"
console.log(student);

//function
function greeting(msg="welcome"){
    console.log("good morning" +msg);
}
greeting("greetings");

function sum(a,b){
    return a+b;
}
let data=sum1(1,2);
console.log(data);

function sum1(a,b,c){
    return a+b+c;
}
let data1=sum1(1,2,3);
console.log(data1);


function cCompiler(){
    return "cCompiler selected";
}
function javaCompiler(){
    return "javaCompiler selected";
}
function selectLanguage(clbk){
    console.log("you have "+clbk());
}
selectLanguage(cCompiler);

let parent=document.getElementsByClassName("parent");
console.log(parent)
parent[0].innerHTML="<h2 style=color:red>hello js</h2>"

const h1=document.createElement("h1");
console.log(h1);
h1.innerText="ABESEC";
console.log(h1);
h1.style.backgroundColor="cyan";
h1.style.color="red";
h1.style.padding="20px";
h1.style.marginLeft="300px";
parent[0].appendChild(h1);
const img=document.createElement("img");
img.src="abes_logo-removebg-preview.png";
console.log(img);
img.setAttribute("width","200");
img.setAttribute("height","300");
parent[0].appendChild(img);
parent[0].removeChild(img);



function getData(){
  console.log("hii good morning");
  parent[0].innerHTML="<h2 style=color:red>hello, event handled</h2>";
}