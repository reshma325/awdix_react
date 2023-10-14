import { useState } from "react";

function useCounter(initialState =0){
    const [count ,setCount]=useState(initialState);

function Increment(){
    setCount((value)=>value+1)
}function Decrement(){
    setCount((value)=>value-1)
}function Reset(){
    setCount(0)
}
return[count,Increment,Decrement,Reset]
}
export default useCounter;