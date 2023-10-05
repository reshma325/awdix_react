import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddProduct = () => {
    const [productData ,setProductData]=useState({name:"",price:"",image_url:""})
const handleChange=(event)=>{
    setProductData({
      ...productData ,[event.target.name]:event.target.value
    })

}
const sendDataToBackend=async(event)=>{
    event.preventDefault();
    if(productData.name && productData.price && productData.image_url && productData.price>0){
        try{
            const{data}=await axios.post("https://fakestoreapi.com/products",{title:productData.name,price:productData.price,image:productData.image_url})
            console.log(data,"response from backend");
            toast.success('Product added sucessfully!')
            setProductData({name:"",price:"",image_url:""})
        }catch(error){
            console.log(error)

        }
        
    }else{
        toast.error("All fields are mandetory")
    }
}
  return (
    <div>
        <h1>
            Add Product
        </h1>
        <form onSubmit={sendDataToBackend}>
<label style={{fontFamily:"sans-serif", fontSize:"20px", marginBottom:"15px", marginTop:"15px"}}> Product Name</label><br/>

<input type='text'name='name'onChange={handleChange} value={productData.name} ></input><br/>
<label style={{fontFamily:"sans-serif", fontSize:"20px" , marginBottom:"15px", marginTop:"15px"}}> Product Price</label><br/>
<input type='number' name='price' onChange={handleChange} value={productData.price}></input><br/>
<label style={{fontFamily:"sans-serif", fontSize:"20px", marginBottom:"15px", marginTop:"15px"}}> Product Image</label><br/>
<input type='url' name='image_url' onChange={handleChange} value={productData.image_url}></input><br/>
<input type="submit"></input>
        </form>
    </div>
  )
}

export default AddProduct