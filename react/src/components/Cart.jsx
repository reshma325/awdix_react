import React, { useContext, useEffect, useState } from 'react'
import '../components/Cart.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import toast from 'react-hot-toast'
import api from '../Helpers/AxiosConfig'

const Cart = () => {
    const router = useNavigate()
    const { state } = useContext(AuthContext)
    const [cart, setCart] = useState([])
  
    const viewCart = async () => {
        try {
            const response = await api.post('/user/viewcart', { userId: state.user.id })
            console.log(response, "kkk")
            if (response.data.success) {
               
                setCart(response.data.products)
            }
            console.log(cart,"kkk")

        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    useEffect(() => {

        if (!state?.user) {
            toast.error("Please login to access cart")
            router('/login')

        } else {
            viewCart()
        }

    }, [state, router])
    return (
        <div id='cart_main'>{cart.length?
        <div id='cart_products'>
            {cart.map((c)=>(
                <div id='c_main' >
                    <div id='c_img'>
                        <img src={c.image} alt=''/>
                    </div>
                    <div id='c_text'>
                        <div id='c_name'>{c.name}</div>
                        
                        <div id='c_price'>₹{c.price}</div>
                        <div id='c_caegory'>{c.category}</div>
                        <div id='c_buttons'>
                            <p id='c_b'>CheckOut</p>
                            
                            <p id='c_b' >Move To Wishlist</p>

                        </div>
                    </div>
                </div>
            ))}

        </div>:<div>Loading....</div>}</div>
    )
}

export default Cart