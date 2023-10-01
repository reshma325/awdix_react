import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const SingleProduct=()=> {
    const{id}=useParams();
    const router= useNavigate();
  return (
    <div>
        <h1>SingleProduct :{id}</h1>
     <button onClick={()=>router('/')} >Go To Home</button>
     </div>
  )
}

export default SingleProduct