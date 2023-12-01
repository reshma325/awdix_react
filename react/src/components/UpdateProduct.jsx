import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../Helpers/AxiosConfig'
import toast from 'react-hot-toast'

const UpdateProduct = () => {
    const [productData, setProductData] = useState({})
    const router=useNavigate();
    // console.log(productData, "hiii")
    const { id } = useParams()
    async function getProductData() {
        try {
            // alert('Boo')
            const response = await api.get(`/product/getsingleproduct?id=${id}`)
            if (response.data.success) {
                // console.log(response.data,"HoneyBoo")
                setProductData(response.data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }
    function handleChange(event) {
        setProductData({ ...productData, [event.target.name]: event.target.value })

    }
    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response=await api.post('/product/update_product',{productData})
            if(response.data.success){
                toast.success(response.data.message)
                router('/your_products')
            }
            
        } catch (error) {
            toast.error(error.response.data.message)
        }


    }
    useEffect(() => {
        // console.log(id,"ID")
        if (id) {

            getProductData()
        }

    }, [id])
    return (
        <div style={{paddingTop:"75px"}} >
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <lable>Product Name</lable><br />
                <input onChange={handleChange} type='text' value={productData.name} name='name'></input><br />
                <lable>Product Price</lable><br />
                <input onChange={handleChange} type='text' value={productData.price} name='price'></input><br />
                <lable>Product Category</lable><br />
                <input onChange={handleChange} type='text' value={productData.category} name='category'></input><br />
                <lable>Product Image</lable><br />
                <input onChange={handleChange} type='text' value={productData.image} name='image'></input><br />
                <input type='submit' value="Update"></input>
            </form>
        </div>
    )
}

export default UpdateProduct