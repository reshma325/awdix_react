import './Products.css'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./NewSingleProduct.css";
import api from '../Helpers/AxiosConfig';


const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products,"3.04")
    const router= useNavigate();
    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await api.get('/product/getallproducts')
             
                if(data.success){
                    setProducts(data.products)
                }
                
                

            } catch (error) {
                toast.error(error.data.message)
            }

        }getProducts()


    },[])
    return (
        <div>{products?.length? <div id='prod_main' >
            {products.map((pro)=>(
              
                <div id='prod'  onClick={()=>router(`/newsingleproduct/${pro._id}`)}>
                    <img id='prod_img'  src={pro.image} alt='Product_Image Uavailable'/>
                    <h1 id='prod_name' >{pro.name}</h1>
                    <h3 id='prod_price'> ₹{pro.price}</h3>
                    <h3 id='prod_category' >{pro.category}</h3>
                    
                   
                    <div id='prod_button'>
                        <p id='prod_b_1'>View</p>
                        <p id='prod_b_1'>Buy</p>
                    </div>
                   
                </div>
            ))}
            
            
            
             </div>:<div>Loading...</div>}</div>
    )
}

export default Products