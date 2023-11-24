import React from 'react'
import useLocalstorage from './useLocalStorage'

const CustomHookLS = () => {
const[name,setName]=useLocalstorage('name','');

const handelChange=(e)=>
setName(e.target.value);
  return (
    <div>
        <input type='text' value={name} onChange={handelChange}></input>
    <p>Hello {name}</p>
    </div>
  )
}

export default CustomHookLS