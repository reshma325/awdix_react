
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../Helpers/AxiosConfig'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext.jsx'
import "./NewSingleProduct.css";

const AddProduct = () => {
    const {state}=useContext(AuthContext)
   
    const [productData ,setProductData]=useState({name:"",price:"",image_url:"",category:""})
const handleChange=(event)=>{
    setProductData({
      ...productData ,[event.target.name]:event.target.value
    })
   

}
const router = useNavigate();
const sendDataToBackend=async(event)=>{
    event.preventDefault();
    if(productData.name &&productData.category && productData.price && productData.image_url && productData.price>0){
        console.log(productData,"+++++++")
        try{
            console.log("bye")
            console.log(productData.name)
            const{data}=await api.post("/product/addproduct",{name:productData.name,price:productData.price,image:productData.image_url,category:productData.category,id: state?.user?.id})
            console.log(data,"Hi")
            if(data.success){
                // console.log(data,"response from backend");
                toast.success(data.message)
                setProductData({name:"",price:"",image_url:"",category:""})
                router("/your_products")
                
            }
          
            
        }catch(error){
           toast.error(error.response.data.message)

        }
        
    }else{
        toast.error("All fields are mandetory")
    }

   
}

useEffect(()=>{
    if(state?.user && state?.user?.name === undefined){
        
        alert(state.name)
        router("/login")
        toast.error("Login to Add Products")
    }

},[state,router])
  return (
    <div  style={{paddingTop:"75px"}}>
        <h1>
            Add Product
        </h1>
        <form  style={{paddingTop:"25px"}} onSubmit={sendDataToBackend}>
<label style={{fontFamily:"sans-serif", fontSize:"20px", marginBottom:"15px", marginTop:"15px"}}> Product Name</label><br/>

<input type='text'name='name'onChange={handleChange} value={productData.name} ></input><br/>
<label style={{fontFamily:"sans-serif", fontSize:"20px" , marginBottom:"15px", marginTop:"15px"}}> Product Price</label><br/>
<input type='number' name='price' onChange={handleChange} value={productData.price}></input><br/>

<label style={{fontFamily:"sans-serif", fontSize:"20px" , marginBottom:"15px", marginTop:"15px"}}> Product Category</label><br/>
<input type='text' name='category' onChange={handleChange} value={productData.category}></input><br/>
<label style={{fontFamily:"sans-serif", fontSize:"20px", marginBottom:"15px", marginTop:"15px"}}> Product Image</label><br/>
<input type='url' name='image_url' onChange={handleChange} value={productData.image_url}></input><br/>
<input type="submit"></input>
        </form>
    </div>
  )
}

export default AddProduct