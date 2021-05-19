import React from 'react'
import useWishlist from '../hooks/useWishlist';

const AddToWishlist = ({ details }) => {


    // console.log(_id)
    const { addToWishlist } = useWishlist()

    return (
        <span
            className="material-icons"
            onClick={() => addToWishlist(details)} >
            favorite_border
        </span>
    )
}

export default AddToWishlist
