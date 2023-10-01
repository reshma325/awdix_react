import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



const StyledComponent = () => {
  const router = useNavigate();
   const[isClicked,setIsClicked]=useState(false);
  const handelClick=()=>{
    setIsClicked(!isClicked)
  }
  const Button = {
    color:isClicked ? "red": "black",
    backgroundColor:isClicked ?"yellow" :"grey",
    width:"150px",
    height:"50px",
    fontSize :"22px",
    fontweight:"400",
  marginBottom:"12px"}
    
  const H1=styled.h1`
  color: green;
  font-size: 40px;
  font-weight:800;
  font-family:courier;
  `
 
  return (
    <div style={{ border: "2px dotted ", padding:"30px",margin:"30px"}}>
      <H1>Styled Component </H1><br />
      <button onClick={(handelClick) }style={Button}>Click me!</button><br/>

      <button onClick={() => router('/')}>Go To HomePage</button>
    </div>
  )
}

export default StyledComponent 