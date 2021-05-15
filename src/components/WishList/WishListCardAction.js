import React from 'react'
import { useProduct } from '../../context/product-context'
import '../../styles/style.css'

import { Link } from 'react-router-dom'
import DeleteFromWishlist from './DeleteFromWishlist'
import AddToCart from '../Cart/AddToCart'
import OutOfStock from '../OutOfStock'

const WishListCardAction = ({ details }) => {

    const { _id, inStock }
        = details

    const { cart } = useProduct()

    return (
        <div className="product-links-cart">
            <DeleteFromWishlist details={details} />
            {
                cart.find((item) => item._id === _id) ?
                    <Link to="/cart" className="button-link">
                        Go To Cart
                    </Link>
                    :
                    inStock ?
                        <AddToCart details={details} />
                        :
                        <OutOfStock />
            }
        </div>
    )
}

export default WishListCardAction;
