import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Effect3 = () => {

    const [count, setCounter]= useState(0);

    useEffect(()=>{alert('Rendered Effect 3')},[count]);
    const router= useNavigate();
  return (
    <div>
<h1>
    Counter : {count}
</h1>
<button onClick={()=>setCounter((preVal)=>preVal+1)}>
    +
</button>
<button onClick={()=>router('/')} >Go To Home</button>

    </div>
  )
}

export default Effect3