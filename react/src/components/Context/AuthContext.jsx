
import { createContext, useEffect, useReducer } from "react";
import api from "../../Helpers/AxiosConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }

        case "LOGOUT":
            return { ...state, user: null }



        default: return state

    }
}
const ParentAuthContext = ({ children }) => {
    const initialState = { user: null }
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
    }
    const logout = () => {
        localStorage.removeItem("my-token")
        dispatch({ type: "LOGOUT" })
        toast.success("Sucessfully logged out!")
    }

    useEffect(() => {
       const getCurrentUser= async()=> {
            try {
               
                const response = await api.post('/auth/get-current-user', { token })
               
                if (response.data.success) {
              
                    login(response.data.user)

                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        const token = JSON.parse(localStorage.getItem("my-token"))


        if (token) {
            getCurrentUser()
        }

    },[])

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default ParentAuthContext