import React,{useState} from "react";
function UseStudentState(){
    const[count,setCount]=useState(20);
    // return(
    //     <div style={{color:'red'}}>{count}</div>
    // )

    function doIncrement(){
        console.log("inside button");
        setCount(count+10);
    }
    return(
        <>
        <div style={{color:'red',border:'2px solid red',width:'300px',height:'400px',margin:'20px'}}>{count}
            <div><button id="btn" onClick={doIncrement} style={{backgroundColor:'blue'}}>Increment Counter</button></div></div>
        </>
    )
}
export default UseStudentState