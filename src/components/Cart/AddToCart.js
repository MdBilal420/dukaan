import React from 'react'
import { useProduct } from '../../context/product-context';

const AddToCart = ({ details }) => {

    const { _id, name, image, fastDelivery, inStock, productName, price }
        = details

    const { dispatch } = useProduct()

    return (
        <span className="button-link"
            onClick={() => dispatch({
                type: "ADD_TO_CART",
                payload: { _id, name, image, fastDelivery, inStock, productName, quantity: 1, price }
            })}>
            Add To Cart
        </span>
    )
}

export default AddToCart
