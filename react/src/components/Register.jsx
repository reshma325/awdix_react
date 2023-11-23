import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

import api from '../Helpers/AxiosConfig'

const Register = () => {
    const router = useNavigate();
    const[userData,setUserData]=useState({name:"",email:"",password:""})

    
    const handleChange=(event)=> {
        // console.log(event.target.value ,"value",event.target.name,"name")
        setUserData({...userData,[event.target.name]:event.target.value})
       

    }
    const sendDataToBackend= async(event)=>{
        event.preventDefault();
        //   alert("Data submitted to backend..")
        if(userData.name && userData.email && userData.password){
            if(userData.password.length>=8){
                console.log(userData)
                        try{const response= await api.post("/auth/register",{userData});
                      
                            if(response.data.success)
                            {toast.success("Registration Successful!")
                                setUserData({
                                name:"",email:"",password:""
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
                Register
            </h1>
            <form onSubmit={sendDataToBackend}>
                <label> Name:</label><br />
                <input name='name' type='text' onChange={handleChange} /><br />
                <label> Email:</label><br />
                <input name='email' type='email'onChange={handleChange} /><br />
                <label> Password:</label><br />
                <input name='password' type='password'onChange={handleChange}/><br />
                <input type='submit' value="Register"/><br />
            </form>
            <button onClick={() => router('/')}>
                Go To Homepage
            </button>

        </div>
    )
}

export default Register