// import { useEffect, useState } from 'react'

// const Effect4 = () => {

//     const[count1,setCounter1]=useState(0);
//     const[count2,setCounter2]=useState(0)
    
    
//   useEffect(()=>{alert("Rendered effect4")}, [count1,count2]);
//   return (
//     <div>

//         <h1>
//             Count 1 :{count1}
//         </h1>
//         <button onClick={()=>setCounter1((preVal)=>preVal+1)}>
//             +
//         </button>

//         <h1>
//             Count 2 : {count2}
//         </h1>
//         <button onClick={()=>setCounter2((preVal)=preVal+1)}>
//             +
//         </button>
//     </div>
//   )
// }

// export default Effect4;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Effect4 = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        alert("Rendered Effect 4")
    }, [counter1, counter2]);// multiple dependency

    const router= useNavigate();

    return (
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={() => setCounter1((prevValue) => prevValue + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2((prevValue) => prevValue + 1)}>+</button>
            <button onClick={()=>router('/')} >Go To Home</button>
        </div>
        
    )
}
export default Effect4;