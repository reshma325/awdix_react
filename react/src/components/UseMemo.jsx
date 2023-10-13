import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter, setCounter]=useState(0);
    const [todo, setTodo]=useState([]);

function addTodo() {
    setTodo([...todo, 'New Todo'])
}

    // const lengthyCalculation= calculate(counter);
    const lengthyCalculation = useMemo(()=>calculate(counter),[counter])
  return (
    <div>
        <h1>
            Lenghthy Calculation = {lengthyCalculation}
        </h1>
        
        <h1>
            Counter :{counter}
        </h1>
        <button onClick={()=>setCounter((preVal)=>preVal+1)}> +</button><br/><br/><br/><br/>

        <button onClick={addTodo}>Add todo</button>
        {todo.map((todo)=>(<div style={{textAlign:"center"}}> 
            {todo}
        </div>)

        )}
    </div>
  )
}
const calculate= (counter)=>{
    console.log("calculating....")
    for(let i=0;i<1000000000;i++){
  
        counter+=1;
    }
    return counter;
} 

export default UseMemo