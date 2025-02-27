import React, { useState } from 'react'
import AI from './AI.jpg'
function Imagemanipulation(){
    const[height,setHeight]=useState(100);
    const[width,setWidth]=useState(100);
    const[rotateimg,setRotate]=useState(30);
    const[ColorBackground,setBackground]=useState("pink");
    function EnhanceHeight(){
        setHeight(height+30);
    }
    function EnhanceWidth(){
        setWidth(width+30);
    }
    function rotateimage(){
        setRotate(rotateimg+30);
    }
    function backgroundSet(){
        setBackground(ColorBackground==="pink" ? "palegreen" : "pink");
    }
    return(
        <div style={{border:'2px solid black',height:'300px',width:'400px',marginLeft:'80px', backgroundColor:ColorBackground}}>
            <div style={{marginLeft:'150px',marginTop:'20px',border:'1px solid black',height:'100px',width:'100px'}}>
        <img src={AI}style={{transform:`rotate(${rotateimg}deg)`,backgroundColor:'red'}} height={height} width={width} alt='AI image'/>
        </div>
        <div style={{marginTop:'90px'}}>
            <button id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
            <button id='btn' onClick={EnhanceWidth}>EnhanceWidth</button>
            <button id='btn' onClick={rotateimage}>Rotate</button>
            <button id='btn' onClick={backgroundSet}>ChangeBackground</button>
        </div>
        </div>
    )
}
export default Imagemanipulation