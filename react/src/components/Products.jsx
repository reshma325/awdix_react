import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products')
                setProducts(data)

            } catch (error) {
                toast.error(error.message)
            }

        }getProducts()


    },[])
    return (
        <div>{products?.length? <div style={{display:'flex',flexWrap:"wrap", justifyContent:"space-around"}}>
            {products.map((pro)=>(
                <div style={{width:"23%",height:"600px"}}>
                    <img style={{width:"80%",height:"300px",marginTop:"25px" ,padding:"15px",backgroundColor:"#f5f5f0"}} src={pro.image} alt=''/>
                    <h1 style={{fontSize:"20px", marginTop:"5px",padding:"15px",backgroundColor:"#f2f2f2"}}>Name: {pro.title}</h1>
                    <h3 style={{fontSize:"18px",backgroundColor:"#f2f2f2"}}>Price:{pro.price}₹</h3>
                    <button style={{fontSize:"14px",width:"100px", height:"25px",marginTop:"5px"}} >Add to cart</button>
                </div>
            ))}
            
            
            
             </div>:<div>Loading...</div>}</div>
    )
}

export default Products