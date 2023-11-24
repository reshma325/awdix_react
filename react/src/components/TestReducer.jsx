import React, { useReducer } from 'react'

const TestReducer = () => {
    const reducer=(state, action) =>{
        switch (action.type){
            case "INCREMENT":
                return{...state,count:state.count+1}
                case "DECREMENT":
                return{...state,count:state.count-1}
                case "RESET":
                return{...state,count:0}
                default:
                    return state;
        }

    }
    const initialstate={count:0}
    const [state, dispatch]=useReducer(reducer,initialstate);
    function Increment() {
        dispatch({type:"INCREMENT"})
    } function Decrement() {
        dispatch({type:"DECREMENT"})
    } function Reset() {
        dispatch({type:"RESET"})
    }


  return (
    <div>
        <h1>
            Count: {state.count}
        </h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default TestReducer