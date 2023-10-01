import React, { useEffect, useState } from 'react'

const Effect2 = () => {

    const[count,setCounter]=useState(0);

    useEffect(()=>{alert('Rendered Effect2')},[])
  return (
    <div>
        <h1>
            Count: {count}
        </h1>
        <button onClick={()=>setCounter((preVal)=>preVal+1)}>
            +
        </button>
    </div>
  )
}

export default Effect2