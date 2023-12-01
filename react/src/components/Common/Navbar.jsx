import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../Common/Navbar.css'

const Navbar = () => {
    const router = useNavigate()
    const { state, logout } = useContext(AuthContext)

    return (
        <div id='nav_main' >
            <div id='nav_left' onClick={() => router('/')}>Home</div>
            <div id='nav_mid' >
                <div id='nav_products' onClick={() => router('/products')}>Products</div>
                {state?.user?.id &&
                    <div id='nav_product_actions' >
                        <div onClick={() => router('/addproduct')}>Add Product </div>
                        <div onClick={() => router('/your_products')}>Your Products</div>
                    </div>
                }
            </div>
            <div id='nav_right' >
                {state?.user?.id ? <>
                    <div id='nav_profile' onClick={() => router('/profile')}>Profile</div>
                    <div id='nav_cart' onClick={() => router('/viewCart')}>Cart</div>
                    <div id='nav_logout' onClick={logout}>Logout</div>
                </> : <div id='nav_login' onClick={() => router('/login')}>Login</div>}
            </div>
        </div >
    )
}

export default Navbar