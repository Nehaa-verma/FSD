const http = require("http");
const PORT = 3002;
const server = http.createServer(async(req, res) => {
  res.setHeader("Content-type", "text/html");
  const data= await fetch('https://fakestoreapi.com/products');
  const jsdata=await data.json();
  console.log(jsdata[0].title);
  const title=jsdata[0].title;
  const img=jsdata[0].image;
  const des=jsdata[0].description;
  const htmltemplate=`<h2 style='background-color:pink;color:black;'>welcome to online store for shoping</h2>
  <br> 
  <div style='background-color:skyblue; display:flex; flex-direction:column;color:black;' >
  <h3>${title}</h3>
  <img src=${img} height=200 width=200/>
  <p>${des}</p>
  </div>`   
  res.end(htmltemplate);
});
// server.listen(PORT,()=>)

server.listen(PORT, () => {
  console.log("server is running on :" , PORT);
});
