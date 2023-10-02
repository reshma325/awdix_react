import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"


const NewSingleProdcut = () => {
    const [prodcutData, setProductData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                if (data) {
                    setProductData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])
    console.log(prodcutData, "prodcut Data")
    return (
        <div >{prodcutData?.id ?
            <div id='main'>
                <div id='image'>
                    <img src={prodcutData.image} alt='' />
                </div>
                <div id='text'>
                    <h1> {prodcutData.title}</h1>
                    <h4> Category : {prodcutData.category}</h4>
                    <h4> Description : {prodcutData.description}</h4>
                    <h4>${prodcutData.price} </h4>
                    <h4> Ratings : {prodcutData.rating.rate}</h4>
                    <h4>Number of Ratings : {prodcutData.rating.count} </h4>
                    <p>Add to Cart</p>
                </div>

            </div> : <div id='loading'> Loading....</div>}</div>
    )
}

export default NewSingleProdcut