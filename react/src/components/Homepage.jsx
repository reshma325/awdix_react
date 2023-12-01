import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext.jsx";
import Products from "./Products.jsx";


function Homepage() {
// const {state,dispatch}=useContext(MyContext);


    const router = useNavigate();
    function routerToLogin() {
        router('/login')
    }
    const { state, logout } = useContext(AuthContext)
    // console.log(, "hhhhhhhhhhh")

    return (
        <div style={{paddingTop:"75px"}}>
        
            <h1>Hi {state?.user?.name} !</h1>
            <Products/>


            {/* <h1>
                Counter:{state.count}
            </h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
         
            {/* <button onClick={() => router('/Count')} >Go To Counter</button>
            <button onClick={() => router('/effect1')} >Go To Effect1</button>
            <button onClick={() => router('/effect2')} >Go To Effect2</button>
            <button onClick={() => router('/effect3')} >Go To Effect3</button>
            <button onClick={() => router('/effect4')} >Go To Effect4</button> */}
            {/* <button onClick={() => router('/params')} >Go To Params</button>
            <button onClick={() => router('/mapping')} >Go To Mapping</button>
            <button onClick={() => router('/ternary')} >Go To Ternary</button>
            <button onClick={() => router('/styled')} >Go To Styled Component</button>
            <button onClick={() => router('/countSE')} >Go To Counter with StateEffects</button>
            <button onClick={() => router('/dynamic')} >Go To DynamicStyling</button>
            <button onClick={() => router('/childrencomponent')} >Go To children Component</button> */}
            
            {/* <button onClick={() => router('/classcomponent')} >Go To ClassComponent</button> */}
           
            {/* <button style={{ backgroundColor: "red", color: "white" }} onClick={() => toast.error("Error")} >Click For Error</button>
            <button onClick={() => toast.success("Success")} style={{ backgroundColor: "greenyellow" }}  >Click For Success</button> */}
            {/* <button onClick={() => router('/products')} >Go To Products</button> */}
            {/* <button style={{backgroundColor:"red" , color:"white"}} onClick={() =>toast.error("Error")} >Click For Error</button> */}
            {/* <button onClick={() => toast.success("Success")} style={{backgroundColor:"greenyellow"}}  >Click For Success</button> */}
            
            {/* <button onClick={() => router('/usecallback')} >Go To todo</button> */}



        </div>


    )
}
export default Homepage;