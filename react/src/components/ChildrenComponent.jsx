import React from 'react'
import { useNavigate } from 'react-router-dom'


const ChildrenComponent = () => {
    const router=useNavigate();

  return (
    <div>
        <h1>
        Children Component
        </h1>
        <Button>
            Text 
        </Button> 
        <button onClick={()=>router('/')}>
            Go To Homepage
        </button>

        
    </div>
  )
}
const Button = ({children})=>{
    return(
        <button>
{children}
        </button>
    )
}

export default ChildrenComponent