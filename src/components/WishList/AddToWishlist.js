import React from 'react'
import { useProduct } from '../../context/product-context';

const AddToWishlist = ({ details }) => {

    const { _id, name, image, fastDelivery, inStock, productName, price } = details

    const { dispatch } = useProduct()

    return (
        <span
            className="material-icons"
            onClick={() => dispatch({
                type: "ADD_TO_WISHLIST",
                payload: { _id, name, image, inStock, fastDelivery, productName, price }
            })} >
            favorite_border
        </span>
    )
}

export default AddToWishlist
