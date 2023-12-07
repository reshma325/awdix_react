import './Products.css'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./NewSingleProduct.css";
import api from '../Helpers/AxiosConfig';
import { AuthContext } from './Context/AuthContext';


const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products, "3.04")
    const router = useNavigate();
    const { state } = useContext(AuthContext)
    async function Cart(id) {
        if (state?.user.id) {
            try {
                const response = await api.post('/user/addtocart', { userId: state.user.id, ProductId: id })
                if (response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }

        } else {
            toast.error("No")
        }

    }

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await api.get('/product/getallproducts')

                if (data.success) {
                    setProducts(data.products)
                }



            } catch (error) {
                toast.error(error.data.message)
            }

        } getProducts()


    }, [])
    return (
        <div>{products?.length ? <div id='prod_main' >
            {products.map((pro) => (

                <div id='prod'  >
                    <img id='prod_img' src={pro.image} alt='Product_Image Uavailable' />
                    <h1 id='prod_name' >{pro.name}</h1>
                    <h3 id='prod_price'> ₹{pro.price}</h3>
                    <h3 id='prod_category' >{pro.category}</h3>


                    <div id='prod_button'>
                        <p id='prod_b_1' onClick={() => router(`/newsingleproduct/${pro._id}`)}>View</p>
                        <p id='prod_b_1' onClick={() => Cart(pro._id)}>Buy</p>
                    </div>

                </div>
            ))}



        </div> :
            <div>Loading...</div>}
        </div>
    )
}

export default Products