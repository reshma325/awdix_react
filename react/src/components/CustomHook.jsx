import React from 'react'
import useCounter from './useConter'

const CustomHook = () => {
    const[count ,Increment,Decrement,Reset]=useCounter()
  return (
    <div>
        <h1>
            Count :{count}
        </h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CustomHook