import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../Helpers/AxiosConfig'
import './YourProducts.css'

const YourProducts = () => {
    const router = useNavigate()
    const [yourProducts, setYourProducts] = useState([])

    const { state } = useContext(AuthContext)
    console.log(yourProducts, "Your Products")

    const getYourProducts = async () => {
        try {

            const response = await api.post("/product/your_products", { id: state?.user?.id })

            if (response.data.success) {
                setYourProducts(response.data.products)

            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const deleteProduct = async (id) => {
        try {
            const response = await api.delete('/product/delete_product', { params: {id} })
            if (response.data.success) {
                getYourProducts()
                toast.success(response.data.message)
            }

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        if (state?.user && state?.user?.name === undefined) {

            alert(state.name)
            router("/login")
            toast.error("Login to Add Products")
        }
        if (state?.user && state?.user?.name !== undefined) {

            getYourProducts()

        }

    }, [state, router])
    return (
        <div >{yourProducts.length ?
            <div id='main'>
                {yourProducts.map((product) => (
                    <div id='products'>
                        <div id='p_image'>
                            <img src={product.image} alt='' />
                        </div>
                        <div id='p_text_'>
                            <h1 id='p_t1'> {product.name}</h1>
                            <h4 id='p_t4'>₹{product.price} </h4>
                            <h4 id='p_t2'> Category : {product.category}</h4>

                         
                            <div id='p_buttons'>
                                <p id='p_t7' onClick={() => router(`/update_product/${product._id}`)}>Update</p>
                                <p id='p_t7' onClick={() => deleteProduct(product._id)}>Delete</p>

                            </div>



                        </div>

                    </div>




                ))}


            </div>
            : <div id='loading'> Loading Product....</div>}</div >
    )
}

export default YourProducts

/*
<div >{yourProducts.length?
        <div id='main'>
        {yourProducts.map((product)=>(
            <div id='image'>
                <img src={yourProducts.image} alt='' />
            </div>
            <div id='text_'>
                <h1 id='t1'> {yourProducts.name}</h1>
                <h4 id='t2'> Category : {yourProducts.category}</h4>
              
                <h4 id='t4'>${yourProducts.price} </h4>
               
                <p id='t7'>Add to Cart</p>
            </div>))}
            

        </div> 
        : <div id='loading'> Loading Product....</div>}</div> */