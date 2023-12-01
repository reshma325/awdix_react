import { createContext, useEffect, useReducer } from "react";
import api from "../../Helpers/AxiosConfig";
import toast from "react-hot-toast";

 export const MyContext= createContext();

const GlobalContext=({children})=>{
    const reducer=(state ,action)=>{
        switch (action.type) {
            case "INCREMENT":
                return{...state, count: state.count+1}
                case "DECREMENT":
                    return{...state,count:state.count-1}
                    case "RESET":
                        return{...state,count:0 }
               
        
            default:
                return state;
        }
    }
    const initialState={count:0};
    const[state ,dispatch]=useReducer(reducer,initialState)

    return(
    <MyContext.Provider value={{state,dispatch}}>{children}</MyContext.Provider>
)
}
export default GlobalContext; 