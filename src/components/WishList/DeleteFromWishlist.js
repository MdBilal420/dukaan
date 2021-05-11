import React from 'react'
import { useProduct } from '../../context/product-context';

const DeleteFromWishlist = ({ details }) => {

    const { _id } = details
    const { dispatch } = useProduct()

    return (
        <span
            className="material-icons"
            onClick={() => dispatch({ type: "DELETE_ITEM_FROM_WISHLIST", payload: { _id } })}>
            favorite
        </span>
    )
}

export default DeleteFromWishlist
