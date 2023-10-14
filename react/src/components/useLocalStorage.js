import { useState,useEffect } from "react";

function useLocalStorage(key,initialValue) {
    const[value,setValue]=useState(
        ()=>{
            const storeValue=localStorage.getItem(key);
        return storeValue? JSON.parse(storeValue):initialValue;
        }
    );

   
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return[value,setValue]

    
}export default useLocalStorage;