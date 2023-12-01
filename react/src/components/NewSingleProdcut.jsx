import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import api from '../Helpers/AxiosConfig';
import { AuthContext } from './Context/AuthContext';
import toast from 'react-hot-toast';


const NewSingleProdcut = () => {
    const [productData, setProductData] = useState({});
    // console.log(productData, "3.15")
    const { id } = useParams();
    const { state } = useContext(AuthContext)

    async function Cart(id) {
        if(state?.user.id){
        try {
            const response=await api.post('/user/addtocart',{userId:state.user.id,ProductId:id}) 
            if(response.data.success){
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
        async function getSingleProductData() {
            try {
                const { data } = await api.get(`/product/getsingleproduct/?id=${id}`)
                console.log(data,"lllll")

                if (data.success) {
                    setProductData(data.product)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])
    // console.log(productData, "3.34")

    return (
        <div >{productData?._id ?
            <div id='s_main'>
                <div id='image'>
                    <img src={productData.image} alt='' />
                </div>
                <div id='text_'>
                    <h1 id='t1'> {productData.name}</h1>
                    <h4 id='t2'>{productData.category}</h4>

                    <h4 id='t4'>${productData.price} </h4>

                    <p id='t7' onClick={() => Cart(productData._id)}>Add to Cart</p>
                    <p id='t7_1'>View Cart</p>
                </div>

            </div> : <div id='loading'> LoadingG....</div>}
        </div>
    )
}

export default NewSingleProdcut