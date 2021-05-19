import React from 'react'
import useProduct from '../hooks/useProduct';

const AddToCart = ({ details }) => {

    const { addToCart } = useProduct()

    return (
        <span className="button-link"
            onClick={() => addToCart(details)}>
            Add To Cart
        </span>
    )
}

export default AddToCart
