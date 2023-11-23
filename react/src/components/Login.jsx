import { useNavigate } from "react-router-dom";
import api from "../Helpers/AxiosConfig";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Context/AuthContext";

function Login(){

    const router = useNavigate();
    const[userData,setUserData]=useState({email:"",password:""})
    console.log("iiiiiiii",userData,setUserData)
const {login,state}=useContext(AuthContext)
    
    const handleChange=(event)=> {
        // console.log(event.target.value ,"value",event.target.name,"name")
        setUserData({...userData,[event.target.name]:event.target.value})
       

    }
    const sendDataToBackend= async(event)=>{
        event.preventDefault();
        //   alert("Data submitted to backend..")
        if( userData.email && userData.password){
            if(userData.password.length>=8){
                console.log(userData)
                        try{const response= await api.post("/auth/login",{userData});
                      
                            if(response.data.success){
                                localStorage.setItem("my token",JSON.stringify(response.data.token))
                                login(response.data.user);
                                toast.success("Login Successful!")
                                setUserData({
                                email:"",password:""
                            })
                           router('/')
        
                            }else{
                                alert(response.data.error)

                        }
                    }catch(error){
                        toast.error(error?.message)
                        console.log(error, "error here !")
                        
                    }
            }else{
                alert('password must be atlrast 8 digit')
            }
        }else{
            alert("please fill all the fields")
        }
    }



    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={sendDataToBackend}>
               
                <label> Email:</label><br />
                <input name='email' type='email'onChange={handleChange} /><br />
                <label> Password:</label><br />
                <input name='password' type='password'onChange={handleChange}/><br />
                <input type='submit' value="Login"/><br />
            </form>
            <button onClick={() => router('/')}>
                Go To Homepage
            </button>

        </div>
    )
}
export default Login;