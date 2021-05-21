import React from 'react'
import { useData } from '../../context/product-context';


const AddToWishlist = ({ details }) => {

    const { addToWishlistAndDb } = useData()

    return (
        <span
            className="material-icons"
            onClick={() => addToWishlistAndDb(details)} >
            favorite_border
        </span>
    )
}

export default AddToWishlist
