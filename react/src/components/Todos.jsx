import { memo } from "react"
import React from 'react'

const Todos = ({todos,addTodo}) => {
    alert("alert from Todo component...!")
  return (
    <div>
        <h1>Todos</h1>
        <button onClick={addTodo}> Add Todo</button>
        {
            todos.map((todo)=>(
                <h1>{todo}</h1>
            ))
        }
    </div>
  )
}

export default  memo (Todos)