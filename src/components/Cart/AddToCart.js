import React from 'react'
import { useData } from '../../context/product-context';


const AddToCart = ({ details }) => {

    const { addToCartAndDb } = useData()

    return (
        <span className="button-link"
            onClick={() => addToCartAndDb(details)}>
            Add To Cart
        </span>
    )
}

export default AddToCart
