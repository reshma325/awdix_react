import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const CountSE = () => {
    const router=useNavigate();
    const[count,setCounter]= useState(0);
    useEffect(()=>{
        if( count===10){
            alert("Reached its limit")
        }
    },[count])
  return (
    <div><h1>
        CountSE
    </h1><br/>
    <h2>
        Count:  {count}
    </h2>
    <button onClick={()=>setCounter((preVal)=>preVal+1)}>
        +
    </button> <button onClick={()=>setCounter((preVal)=>preVal-1)}>
        -
    </button><br/>

        <button onClick={()=>router('/')}>Go To HomePage</button>
    </div>
  )
}

export default CountSE