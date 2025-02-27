import React, { useState } from "react";
function UseFetchAPI() {
    const [data,setData]=useState([]);
  const response = fetch("https://dummyjson.com/recipes");
  response.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
        setData(data);
    })
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  return <div>useFetchAPI
    {JSON.stringify(data)}
  </div>;
}
export default UseFetchAPI;
