import React from 'react'
import { useNavigate } from 'react-router-dom'

const Params = () => {
    const router=useNavigate();
  return (
    <div>
        <button onClick={()=>router("/single/32590")}>
            Single Product
        </button>
        <button onClick={()=>router('/')} >Go To Home</button>
    </div>
  )
}

export default Params