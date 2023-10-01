import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Counter=()=>{
const [counter,setCounter]= useState(0);
const[liked,setLiked]=useState(false);

function multiTask(){
    
    setLiked((flag)=>!flag)
   setCounter((prevalue)=>prevalue+1)
    
}
const router= useNavigate();
return(
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>setCounter((prevalue)=>prevalue+1)}> Counter +</button>
        <button onClick={()=>setCounter((prevalue)=>prevalue+ 10)}> Counter +10</button>
        <button onClick={()=>setCounter((prevalue)=>prevalue-1)}> Counter -</button>
        <button onClick={multiTask}> Like</button>
        <button onClick={()=>router('/')} >Go To Home</button>
    </div>
)
}
export default Counter;