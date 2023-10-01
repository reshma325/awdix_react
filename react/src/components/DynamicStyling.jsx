import React, { useState  } from 'react'
import "./Dynamic.css"
import { useNavigate } from 'react-router-dom';



const DynamicStyling = () => {
    const [isButtonActive,setIsbuttonActive]=useState(false);
    const handleButtonClick=()=>{
        setIsbuttonActive(!isButtonActive)
    }
    const router= useNavigate()
    const buttonClassName =isButtonActive? 'Active-Button':'Inactive-Button'
  return (
    <div>
        <h1>
        Dynamic Styling
        </h1>
        <button className={buttonClassName} onClick={handleButtonClick}>
         {isButtonActive? "Active":"Inactive"}

        </button><br/>
        <button onClick={()=>router('/')}>
            Go To HomePage
        </button>

    </div>
  )
}

export default DynamicStyling