import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallBack = () => {
const [count, setCount]= useState(0);
const[todos, setTodos]= useState([])
function addCount(){
    setCount((preVal)=>preVal+1)
}
const addTodo = useCallback(()=>{
    setTodos([...todos,"New Todo"])
},[todos])



  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={addCount} > +</button><br/>
        <Todos todos={todos} addTodo={addTodo}></Todos>
    </div>
  )
}

export default UseCallBack