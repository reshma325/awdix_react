import React from 'react'
import { useNavigate } from 'react-router-dom'


const Mapping = ({ kuchbhi }) => {


  console.log(kuchbhi)
  const router = useNavigate();
  return (
    <div>
      <h1>Mapping</h1>
      {kuchbhi.map((kuch, i) => (
        <div key={i}>
          <h1> {kuch} </h1>




        </div>))}
        <button onClick={()=>router('/')} >Go To Home</button>

    </div>
  )
}

export default Mapping;